import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import 'twin.macro';
import HomeScreen from 'features/home/screen';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content={''} />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Index;
