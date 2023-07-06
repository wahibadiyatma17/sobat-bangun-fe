import HomeAppearanceCard, { HomeAppearanceCardProps } from '@/components/Cards/HomeAppearanceCard';
import HomeAppearanceDetailCard from '@/components/Cards/HomeAppearanceDetailCard';
import React, { FC } from 'react';
import { styled } from 'twin.macro';

const HomeContentDetail: FC = () => {
  return (
    <StyledHomeContentDetail>
      <div className="home-content__images-container">
        <h4>Tampilan Rumah</h4>
        <div tw="flex gap-4 flex-wrap">
          {HOME_APPEARANCE_DATA.map((home: HomeAppearanceCardProps, idx: number) => (
            <HomeAppearanceCard key={idx} {...home} />
          ))}
        </div>
      </div>
      <div className="home-content__detail-container">
        <HomeAppearanceDetailCard />
      </div>
    </StyledHomeContentDetail>
  );
};

export default HomeContentDetail;

const StyledHomeContentDetail = styled.div`
  display: flex;
  gap: 36px;
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;

  .home-content__images-container {
    display: flex;
    max-width: 912px;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    h4 {
      color: #1a1a1a;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
    }
  }
  .home-content__detail-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 364px;
  }
`;

const HOME_APPEARANCE_DATA = [
  {
    imageUrl: '/images/image_home-appearance-1.png',
    title: 'Ruang Keluarga',
    description: '2.0 x 2.9',
  },
  {
    imageUrl: '/images/image_home-appearance-2.png',
    title: 'Kamar tidur',
    description: '4.0 x 3.4',
  },
  {
    imageUrl: '/images/image_home-appearance-3.png',
    title: 'Ruang Makan & Dapur',
    description: '3.0 x 2.9',
  },
  {
    imageUrl: '/images/image_home-appearance-4.png',
    title: 'Ruang Kerja',
    description: '2.0 x 2.9',
  },
  {
    imageUrl: '/images/image_home-appearance-5.png',
    title: 'Kamar tidur',
    description: '4.0 x 3.4',
  },
] as Array<HomeAppearanceCardProps>;
