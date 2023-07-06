import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';

const TestimoniCard: FC = () => {
  return (
    <StyledTestimoniCard>
      <h4>Testimoni</h4>

      {TESTIMONI_USER_DATA.map((testimoni: TestimoniUserDTO, idx: number) => (
        <div className="testimoni-user__container" key={idx}>
          <div className="user-container">
            <Image src={'/icons/icon_profile.png'} alt="logo profile" width={44} height={44} />

            <div className="user-data__container">
              <div tw="flex items-center gap-2">
                <span className="name">{testimoni.name}</span>
                <div tw="h-4 w-[0.5px] bg-[#C5C7D0]" />
                <div tw="flex items-center">
                  <Image src={'/icons/icon_star.svg'} alt="logo star" width={20} height={20} />
                  <span className="rating">{testimoni.rating}</span>
                </div>
              </div>
              <span className="description">{testimoni.review}</span>
            </div>
          </div>
        </div>
      ))}
    </StyledTestimoniCard>
  );
};

export default TestimoniCard;

const StyledTestimoniCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  h4 {
    color: #1a1a1a;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .testimoni-user__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    .user-container {
      display: flex;
      width: 364px;
      align-items: flex-start;
      gap: 16px;
    }

    .user-data__container {
      display: flex;
      width: 304px;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      flex-shrink: 0;
      align-self: stretch;

      span.name {
        color: #1a1a1a;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
      }

      span.description {
        color: #666;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 136%;
      }

      span.rating {
        color: #4a5568;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
      }
    }
  }
`;

interface TestimoniUserDTO {
  name: string;
  rating: number;
  review: string;
}

const TESTIMONI_USER_DATA = [
  {
    name: 'Budi Setiadi',
    rating: 4.5,
    review: 'Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun',
  },

  {
    name: 'Rina Fitriani',
    rating: 4.2,
    review:
      'Saya sangat puas dengan pelayanan Sobat Bangun. Tim mereka sangat profesional dan ramah.',
  },
  {
    name: 'Ahmad Abdullah',
    rating: 4.8,
    review:
      'Proses pengerjaan yang efisien dan hasilnya sesuai dengan yang diharapkan. Terima kasih Sobat Bangun!',
  },
  {
    name: 'Siti Rahmawati',
    rating: 4.3,
    review:
      'Saya senang dengan pilihan desain yang ditawarkan oleh Sobat Bangun. Mereka juga sangat membantu dalam memilih bahan yang berkualitas.',
  },
] as Array<TestimoniUserDTO>;
