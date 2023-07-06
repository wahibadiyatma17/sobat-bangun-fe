import OtherDesignCard, { OtherDesignCardProps } from '@/components/Cards/OtherDesignCard';
import React, { FC } from 'react';
import { styled } from 'twin.macro';

const HomeOtherDesign: FC = () => {
  return (
    <StyledHomeOtherDesign>
      <h4>Desain Lainnya oleh Studio SAe</h4>
      <div className="other-design-card__container">
        {OTHER_DESIGN_CARD_DATA.map((otherDesign: OtherDesignCardProps, idx: number) => (
          <OtherDesignCard key={idx} {...otherDesign} />
        ))}
      </div>
    </StyledHomeOtherDesign>
  );
};

export default HomeOtherDesign;

const StyledHomeOtherDesign = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  overflow-x: scroll;

  h4 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .other-design-card__container {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
`;

const OTHER_DESIGN_CARD_DATA = [
  {
    title: 'Omah Apik 1',
    type: 'Scandinavian',
    studio: 'Studio SAe',
    price: 'Rp. 32.500.000',
    description: 'Harga konstruksi mulai dari Rp 560.000.000',
  },
  {
    title: 'Omah Apik 2',
    type: 'Scandinavian',
    studio: 'Studio SAe',
    price: 'Rp. 62.500.000',
    description: 'Harga konstruksi mulai dari Rp 360.000.000',
  },
  {
    title: 'Omah Apik 3',
    type: 'Scandinavian',
    studio: 'Studio SAe',
    price: 'Rp. 22.500.000',
    description: 'Harga konstruksi mulai dari Rp 1.060.000.000',
  },
  {
    title: 'Omah Apik 4',
    type: 'Scandinavian',
    studio: 'Studio SAe',
    price: 'Rp. 31.500.000',
    description: 'Harga konstruksi mulai dari Rp 260.000.000',
  },
  {
    title: 'Omah Apik 5',
    type: 'Scandinavian',
    studio: 'Studio SAe',
    price: 'Rp. 35.500.000',
    description: 'Harga konstruksi mulai dari Rp 320.000.000',
  },
] as Array<OtherDesignCardProps>;
