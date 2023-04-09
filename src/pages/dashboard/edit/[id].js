import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
import axios from 'axios';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getProduct(id));
        if (response) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    }
    getProduct();
    console.log(id);
  }, [router?.isReady]);
  return notFound ? (
    <>
    <Head>
      <meta name="description" content="Edit your product" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>Product not found</title>
    </Head>
    <div>Product not Found</div>
    </>
  ) : (
    <>
      <Head>
        <meta name="description" content="Edit your product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Editing {product.title}</title>
      </Head>
      <FormProduct product={product} />
    </>
  );
}
