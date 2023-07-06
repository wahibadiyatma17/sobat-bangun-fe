import Layout from '@/components/Layout';
import React, { FC } from 'react';
import 'twin.macro';

const HomeScreen: FC = () => {
  return (
    <Layout>
      <div tw="w-screen min-h-[100vh] bg-red-400"></div>
    </Layout>
  );
};

export default HomeScreen;
