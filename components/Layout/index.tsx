import React, { FC } from 'react';
import 'twin.macro';

import { useWindowSize } from 'usehooks-ts';
import Navbar from './Navbar';
import Footer from './Footer';

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export type LayoutProps = BaseLayoutProps;

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const isMobile = useWindowSize().width < 768;

  return (
    <div tw="relative min-h-[100vh]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
