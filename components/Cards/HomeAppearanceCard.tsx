import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';

export interface HomeAppearanceCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HomeAppearanceCard: FC<HomeAppearanceCardProps> = (props) => {
  const { imageUrl, title, description } = props;
  return (
    <StyledHomeAppearanceCard>
      <div tw="relative w-full h-[201px]">
        <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} tw="rounded-[4px]" />
      </div>
      <div className="home-appearance__description-box">
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
    </StyledHomeAppearanceCard>
  );
};

export default HomeAppearanceCard;

const StyledHomeAppearanceCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;

  max-width: 262px;
  min-width: 256px;
  height: 310px;

  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #fff;

  .home-appearance__description-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    h5 {
      color: #1a202c;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }

    span {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;
