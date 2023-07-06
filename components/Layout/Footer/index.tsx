import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from 'twin.macro';
import { HiOutlineMail } from 'react-icons/hi';
import { GrFacebookOption, GrInstagram, GrYoutube } from 'react-icons/gr';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="footer__info">
        <div className="footer__info__profile">
          <div tw="relative w-[170px] h-[47px] cursor-pointer">
            <Image
              fill
              src={'/icons/icon_sobat-bangun-white-logo.svg'}
              alt="logo"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="info__description">
            <div className="description-box">
              <span>
                SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan
                proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.
              </span>
            </div>

            <div tw="flex items-center gap-2">
              <HiOutlineMail size={24} color="#fff" />
              <span tw="underline">sobat@sobatbangum.com</span>
            </div>
          </div>

          <div tw="flex flex-col gap-4 w-full">
            <span className="social-media__text">Sosial Media :</span>
            <div className="info__social-media">
              {FOOTER_SOCIAL_MEDIA.map((socmed: FooterSocialMediaDTO) => (
                <div className="info__social-media__card" key={socmed.id}>
                  {socmed.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__info__navigation">
          <div className="navigation__menu__container">
            <h4>Produk & Layanan</h4>
            <div className="navigation__menus">
              {PRODUCTS_AND_SERVICES.map((menu: string, idx: number) => (
                <span key={idx}>{menu}</span>
              ))}
            </div>
          </div>
          <div className="navigation__menu__container">
            <h4>Tentang Kami</h4>
            <div className="navigation__menus">
              {ABOUT_US.map((menu: string, idx: number) => (
                <span key={idx}>{menu}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__payment">
        {FOOTER_PAYMENT_OPTIONS.map((paymentOptions: PaymentOptionsDTO) => (
          <div className="payment__card" key={paymentOptions.title}>
            <span className="payment-title">{paymentOptions.title}</span>
            <div tw="flex gap-6 items-center">
              {paymentOptions.payment_methods.map((method) => (
                <div key={method.slug}>{method.icon}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  padding: 39px 64px;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  background: #012846;
  max-height: 583px;

  .footer__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 149px;
    align-self: stretch;

    .footer__info__profile {
      display: flex;
      width: 608px;
      height: 291px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .footer__info__navigation {
      display: flex;
      align-items: flex-start;
      gap: 48px;
      flex: 1 0 0;

      .navigation__menu__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        flex: 1 0 0;

        h4 {
          color: #fff;
          font-size: 20px;
          font-family: Source Sans Pro;
          font-style: normal;
          font-weight: 700;
          line-height: 150%;
        }
      }

      .navigation__menus {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        span {
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 220%;
        }
      }
    }

    .info__description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      flex: 1 0 0;
      align-self: stretch;

      .description-box {
        display: flex;
        height: 71px;
        flex-direction: column;
        justify-content: center;
        align-self: stretch;
      }

      span {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }

    .social-media__text {
      color: #fff;
      font-size: 16px;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }

    .info__social-media {
      display: flex;
      align-items: flex-start;
      gap: 26px;

      .info__social-media__icon {
        width: 18px;
        height: 18px;
        color: #2c373e;
      }

      .info__social-media__card {
        width: 52px;
        height: 50px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        cursor: pointer;

        :hover {
          background-color: #2c373e;
          .info__social-media__icon {
            color: #ffffff;
          }
        }
      }
    }
  }

  .footer__payment {
    display: flex;
    height: max-content;
    min-height: 81px;
    align-items: flex-start;
    align-self: stretch;

    .payment__card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      flex: 1 0 0;

      .payment-title {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
      }
    }
  }
`;

interface FooterSocialMediaDTO {
  id: number;
  label: string;
  icon: React.ReactNode;
}

const FOOTER_SOCIAL_MEDIA = [
  { id: 1, label: 'Instagram', icon: <GrInstagram className="info__social-media__icon" /> },
  { id: 2, label: 'Facebook', icon: <GrFacebookOption className="info__social-media__icon" /> },
  { id: 3, label: 'Youtube', icon: <GrYoutube className="info__social-media__icon" /> },
] as Array<FooterSocialMediaDTO>;

const PRODUCTS_AND_SERVICES = [
  'Renovasi',
  'Bangun Rumah',
  'Layanan Desain',
  'Teknologi Tambahan',
  'Beli Material',
] as Array<string>;

const ABOUT_US = [
  'Tentang SobatBangun',
  'Kebijakan Dan Privasi',
  'Syarat Dan Ketentuan',
  'FAQ',
  'Daftar Menjadi Mitra',
] as Array<string>;

interface PaymentOptionsDTO {
  title: string;
  payment_methods: Array<{
    slug: string;
    icon: React.ReactNode;
  }>;
}

const FOOTER_PAYMENT_OPTIONS = [
  {
    title: 'Kredit Bangun Rumah',
    payment_methods: [
      {
        slug: 'mandiri',
        icon: (
          <Image
            src={'/images/image_payment-mandiri.png'}
            alt="mandiri"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'btn',
        icon: (
          <Image
            src={'/images/image_payment-btn.png'}
            alt="btn"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'bni',
        icon: (
          <Image
            src={'/images/image_payment-bni.png'}
            alt="bni"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
    ],
  },
  {
    title: 'Tunai Via Bank Transfer',
    payment_methods: [
      {
        slug: 'mandiri',
        icon: (
          <Image
            src={'/images/image_payment-mandiri.png'}
            alt="mandiri"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'bri',
        icon: (
          <Image
            src={'/images/image_payment-bri.png'}
            alt="bri"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'bni',
        icon: (
          <Image
            src={'/images/image_payment-bni.png'}
            alt="bni"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'permata',
        icon: (
          <Image
            src={'/images/image_payment-permata.png'}
            alt="permata"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
    ],
  },
  {
    title: 'Kartu Kredit',
    payment_methods: [
      {
        slug: 'visa',
        icon: (
          <Image
            src={'/images/image_payment-visa.png'}
            alt="visa"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'master-card',
        icon: (
          <Image
            src={'/images/image_payment-master-card.png'}
            alt="master-card"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'jcb',
        icon: (
          <Image
            src={'/images/image_payment-jcb.png'}
            alt="jcb"
            className="bank-payment"
            width={56}
            height={56}
          />
        ),
      },
    ],
  },
  {
    title: 'Rekan Teknologi Tambahan',
    payment_methods: [
      {
        slug: 'asco',
        icon: (
          <Image
            src={'/images/image_payment-asco.svg'}
            alt="asco"
            className="other-payment"
            width={64}
            height={64}
          />
        ),
      },
      {
        slug: 'ineco-solar',
        icon: (
          <Image
            src={'/images/image_payment-ineco-solar.svg'}
            alt="ineco-solar"
            className="other-payment"
            width={64}
            height={28}
          />
        ),
      },
      {
        slug: 'adidaya',
        icon: (
          <Image
            src={'/images/image_payment-adidaya.svg'}
            alt="adidaya"
            className="other-payment"
            width={56}
            height={56}
          />
        ),
      },
      {
        slug: 'agra-surya',
        icon: (
          <Image
            src={'/images/image_payment-agra-surya.png'}
            alt="agra-surya"
            className="other-payment"
            width={48}
            height={48}
          />
        ),
      },
    ],
  },
] as Array<PaymentOptionsDTO>;
