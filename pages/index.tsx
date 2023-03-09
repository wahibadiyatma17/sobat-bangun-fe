import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import "twin.macro";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content={""} />
      </Head>
      <div tw="min-h-screen w-full flex items-center justify-center">
        <h3 tw="text-xl font-bold">Welcome to homepage!</h3>
      </div>
    </>
  );
};

export default Index;
