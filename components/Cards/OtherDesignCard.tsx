import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';
import { HomeRequirementDTO } from './HomeAppearanceDetailCard';
import PrimaryButton from '../Buttons/PrimaryButton';

export interface OtherDesignCardProps {
  title: string;
  type: string;
  studio: string;
  price: string;
  description: string;
}

const OtherDesignCard: FC<OtherDesignCardProps> = (props) => {
  const { title, type, studio, price, description } = props;
  return (
    <StyledOtherDesignCard>
      <div tw="relative w-full h-[201px]">
        <Image
          src={'/images/image_other-home-1.png'}
          alt="other home 1"
          fill
          style={{ objectFit: 'cover' }}
          tw="rounded-[4px]"
          priority
        />
      </div>
      <div className="other-design__info-container">
        <div className="other-design__info-title">
          <div tw="flex items-center gap-2">
            <span className="title">{title}</span>
            <div className="type-badge">
              <span>{type}</span>
            </div>
          </div>
          <div tw="flex items-center gap-1">
            <div tw="relative w-[28px] h-[28px]">
              <Image
                src={'/icons/icon_studio-logo.png'}
                alt="logo studio"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="studio-name">{studio}</span>
          </div>
        </div>

        <div className="other-design__info-requirement">
          {HOME_REQUIREMENT_DATA.map((req: HomeRequirementDTO, idx: number) => (
            <div key={idx} tw="flex flex-col items-center">
              <Image src={req.iconUrl} alt={req.label} width={24} height={24} />
              <span tw="text-[#808080] text-[12px]">{req.label}</span>
              <span tw="text-[#000] text-[14px]">{req.description}</span>
            </div>
          ))}
        </div>

        <div className="other-design__card-separator" />

        <div className="other-design__card-price">
          <span className="label">Harga Desain</span>
          <div tw="flex flex-col">
            <span className="price">{price}</span>
            <span className="description">{description}</span>
          </div>
        </div>

        <div tw="w-full ">
          <PrimaryButton weight="outline" fullWidth size="md">
            Konsultasi Sekarang
          </PrimaryButton>
        </div>
      </div>
    </StyledOtherDesignCard>
  );
};

export default OtherDesignCard;

const StyledOtherDesignCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #fff;
  width: 316px;

  .other-design__info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }

  .other-design__info-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    span.title {
      color: #1a202c;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }

    span.studio-name {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }

    .type-badge {
      display: flex;
      padding: 4px 12px;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      background: #f1f1f1;

      span {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }

  .other-design__info-requirement {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .other-design__card-separator {
    height: 0.5px;
    width: 100%;
    background-color: #e6e6e6;
    align-self: stretch;
  }

  .other-design__card-price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;

    span.label {
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }

    span.price {
      color: #000;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
    }

    span.description {
      color: #808080;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;

const HOME_REQUIREMENT_DATA = [
  {
    iconUrl: '/icons/icon_material.png',
    label: 'Dimensi Tanah',
    description: '15 x 8m',
  },
  {
    iconUrl: '/icons/icon_building.png',
    label: 'Luas Bangunan',
    description: '112m',
  },
  {
    iconUrl: '/icons/icon_stairs.svg',
    label: 'Lantai',
    description: '2',
  },
  {
    iconUrl: '/icons/icon_bed.svg',
    label: 'Kamar Tidur',
    description: '2',
  },
] as Array<HomeRequirementDTO>;
