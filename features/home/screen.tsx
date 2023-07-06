import Layout from '@/components/Layout';
import React, { FC } from 'react';
import 'twin.macro';
import HomeBreadCrumb from './HomeBreadCrumb';
import HomeBanner from './HomeBanner';

const HomeScreen: FC = () => {
  return (
    <Layout>
      <div tw="min-h-[100vh] mt-[9.375rem] flex flex-col gap-6 px-[64px]">
        <HomeBreadCrumb />
        <HomeBanner />
      </div>
    </Layout>
  );
};

export default HomeScreen;
