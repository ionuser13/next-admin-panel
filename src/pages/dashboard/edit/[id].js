import React, { useEffect, useState } from "react";
import FormProduct from "@components/FormProduct";
import { useRouter } from "next/router";
import endPoints from "@services/api";
import axios from "axios";

export default function Edit() {
    const [ product, setProduct ] = useState({});
    const [ notFound, setNotFound ] = useState(false)
    const router = useRouter();
    useEffect(() => {
        const { id } = router.query;
        if(!router.isReady) return;
        async function getProduct() {
            try {
                const response = await axios.get(endPoints.products.getProduct(id));
                if(response) {
                    setProduct(response.data)
                }
            }
            catch (error) {
                console.log(error);
                setNotFound(true)
            }
        }
        getProduct();
        console.log(id);
    }, [router?.isReady])
    return notFound ? <div>Product not Found</div> : <FormProduct product={product} />
}