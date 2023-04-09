import React from 'react';
import Head from 'next/head';
import LoginPage from '@components/LoginPage';

const login = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Sign in to access the products dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login</title>
      </Head>
      <LoginPage />
    </>
  );
};

export default login;
