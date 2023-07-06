import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import PrimaryButton from '../Buttons/PrimaryButton';
import TestimoniCard from './TestimoniCard';

const HomeAppearanceDetailCard: FC = () => {
  return (
    <div tw="flex flex-col gap-8">
      <StyledHomeAppearanceDetailCard>
        <div className="home-appearance-detail-card__container">
          <div className="card-title">
            <h5>Omah Apik 3</h5>
            <div tw="flex items-center gap-1">
              <div tw="relative w-[28px] h-[28px]">
                <Image
                  src={'/icons/icon_studio-logo.png'}
                  alt="logo studio"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span>Studio SAe</span>
            </div>
          </div>

          <div className="card-info">
            <div tw="flex gap-6">
              <span tw="text-[#4D4D4D] w-[80px]">Jenis Rumah</span>
              <span tw="text-[#000]">Scandinavian</span>
            </div>
            <div tw="flex gap-6">
              <span tw="text-[#4D4D4D] w-[80px]">Tipe Desain</span>
              <div tw="flex gap-2 items-center">
                <BsFillCheckCircleFill size={16} color="#F5333F" />
                <span tw="text-[#F5333F]">Dapat Dimodifikasi</span>
              </div>
            </div>
          </div>

          <div className="card-separator" />

          <div className="card-requirement">
            {HOME_REQUIREMENT_DATA.map((req: HomeRequirementDTO, idx: number) => (
              <div key={idx} tw="flex flex-col items-center">
                <Image src={req.iconUrl} alt={req.label} width={24} height={24} />
                <span tw="text-[#808080] text-[12px]">{req.label}</span>
                <span tw="text-[#000] text-[14px]">{req.description}</span>
              </div>
            ))}
          </div>

          <div className="card-separator" />

          <div className="card-price">
            <span className="label">Harga Desain</span>
            <div tw="flex flex-col">
              <span className="price">Rp. 32.500.000</span>
              <span className="description">Harga konstruksi mulai dari Rp 560.000.000</span>
            </div>
          </div>

          <div tw="w-full ">
            <PrimaryButton fullWidth size="md">
              Konsultasi Sekarang
            </PrimaryButton>
          </div>
        </div>
      </StyledHomeAppearanceDetailCard>
      <TestimoniCard />
    </div>
  );
};

export default HomeAppearanceDetailCard;

const StyledHomeAppearanceDetailCard = styled.div`
  display: flex;

  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  max-height: 458px;

  border-radius: 16px;
  border: 1px solid #e6e6e6;

  .home-appearance-detail-card__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;

    .card-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      align-self: stretch;

      h5 {
        color: #1a1a1a;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
      }

      span {
        color: #000;
        font-size: 14px;
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }

    .card-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      align-self: stretch;
      font-size: 14px;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }

    .card-separator {
      height: 0.5px;
      width: 100%;
      background-color: #e6e6e6;
      align-self: stretch;
    }

    .card-requirement {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }

    .card-price {
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
  }
`;

interface HomeRequirementDTO {
  iconUrl: string;
  label: string;
  description: string;
}

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
] as Array<HomeRequirementDTO>;
