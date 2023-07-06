import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';
import { FiChevronDown } from 'react-icons/fi';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';

const Navbar: FC = () => {
  const router = useRouter();
  const isMobile = useWindowSize().width < 1024;
  const isMiniSize = useWindowSize().width < 468;

  return (
    <StyledNavbar>
      <div className="navbar__container">
        <div tw="relative w-[192px] h-[42px] cursor-pointer" onClick={() => router.push('/')}>
          <Image
            fill
            src={'/icons/icon_sobat-bangun-logo.svg'}
            alt="logo"
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        {!isMobile && (
          <div className="navbar__menu">
            {NAVBAR_MENUS.map((menu: NavbarMenuDTO) => (
              <div className="navbar__menu-card" key={menu.id}>
                <span>{menu.label}</span>
                {menu.hasSubMenu && <FiChevronDown className="navbar__menu-card__chevron" />}
              </div>
            ))}
          </div>
        )}

        {!isMiniSize && (
          <div className="navbar__authentication">
            <PrimaryButton weight="none">Daftar</PrimaryButton>
            <PrimaryButton>Masuk</PrimaryButton>
          </div>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.div`
  background-color: #fff;

  height: max-content;
  max-height: 124px;
  padding: 40px 62px;
  z-index: 9999 !important;

  .navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .navbar__menu {
    display: flex;
    align-items: flex-start;
    gap: 32px;
  }

  .navbar__menu-card {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .navbar__menu-card__chevron {
      width: 20px;
      height: 20px;
      color: #000;
    }

    span {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 36px;
    }

    :hover {
      span,
      .navbar__menu-card__chevron {
        color: #f5333f;
      }
    }
  }

  .navbar__authentication {
    display: flex;
    width: 192px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 16px;
  }
`;

interface NavbarMenuDTO {
  id: number;
  slug: string;
  label: string;
  hasSubMenu: boolean;
}

const NAVBAR_MENUS = [
  { id: 1, slug: 'tentang-kami', label: 'Tentang Kami', hasSubMenu: true },
  { id: 2, slug: 'produk-dan-layanan', label: 'Produk & Layanan', hasSubMenu: true },
  { id: 3, slug: 'blog', label: 'Blog', hasSubMenu: false },
  { id: 4, slug: 'faq', label: 'FAQ', hasSubMenu: false },
] as Array<NavbarMenuDTO>;
