import Layout from '@/components/Layout';
import React, { FC } from 'react';
import 'twin.macro';
import HomeBreadCrumb from './HomeBreadCrumb';
import HomeBanner from './HomeBanner';
import HomeContentDetail from './HomeContentDetail';
import HomeOtherDesign from './HomeOtherDesign';

const HomeScreen: FC = () => {
  return (
    <Layout>
      <div tw="h-[max-content] mt-[9.375rem] flex flex-col gap-6 px-[64px] pb-[64px]">
        <HomeBreadCrumb />
        <HomeBanner />
        <HomeContentDetail />
        <HomeOtherDesign />
      </div>
    </Layout>
  );
};

export default HomeScreen;
