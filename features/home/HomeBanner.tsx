import React, { FC, useState } from 'react';
import Image from 'next/image';
import { styled } from 'twin.macro';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HomeBanner: FC = () => {
  const [activeBanner, setActiveBanner] = useState<BannerImageDTO>({
    id: 0,
    url: '/images/images_home-banner-1.png',
  });

  const handleNextBanner = () => {
    let tempNextBanner;
    if (activeBanner.id === BANNER_IMAGES.length - 1) tempNextBanner = BANNER_IMAGES[0];
    else tempNextBanner = BANNER_IMAGES[activeBanner.id + 1];
    setActiveBanner(tempNextBanner);
  };

  const handlePrevBanner = () => {
    let tempPrevBanner;
    if (activeBanner.id === 0) tempPrevBanner = BANNER_IMAGES[BANNER_IMAGES.length - 1];
    else tempPrevBanner = BANNER_IMAGES[activeBanner.id - 1];
    setActiveBanner(tempPrevBanner);
  };

  return (
    <StyledHomeBanner>
      <Image src={activeBanner.url} fill style={{ objectFit: 'cover' }} alt="home" priority />
      <div tw="absolute left-[42px] top-[50%] w-[48px] h-[48px] cursor-pointer">
        <div className="home-banner__arrow-container" onClick={() => handlePrevBanner()}>
          <FiChevronLeft size={24} color="#000000" />
        </div>
      </div>
      <div tw="absolute left-[calc(100%-92px)] top-[50%] w-[48px] h-[48px] cursor-pointer">
        <div className="home-banner__arrow-container" onClick={() => handleNextBanner()}>
          <FiChevronRight size={24} color="#000000" />
        </div>
      </div>
    </StyledHomeBanner>
  );
};

export default HomeBanner;

const StyledHomeBanner = styled.div`
  height: 580px;
  position: relative;
  margin: 0 -64px;

  .home-banner__arrow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    border: 1px solid #f5333f;
    background: #fff;
  }
`;

interface BannerImageDTO {
  id: number;
  url: string;
}

const BANNER_IMAGES = [
  { id: 0, url: '/images/images_home-banner-1.png' },
  { id: 1, url: '/images/images_home-banner-2.webp' },
  { id: 2, url: '/images/images_home-banner-3.webp' },
  { id: 3, url: '/images/images_home-banner-4.jpeg' },
  { id: 4, url: '/images/images_home-banner-5.webp' },
] as Array<BannerImageDTO>;
