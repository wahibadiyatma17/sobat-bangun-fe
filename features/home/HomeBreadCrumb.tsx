import React, { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { styled } from 'twin.macro';

const HomeBreadCrumb: FC = () => {
  return (
    <StyledHomeBreadCrumb>
      <span className="bread-crumb__active">Home</span>
      <FiChevronRight size={24} color="#C5C7D0" />
      <span className="bread-crumb__active">Layanan Desain</span>
      <FiChevronRight size={24} color="#C5C7D0" />
      <span>Omah Apik 3</span>
    </StyledHomeBreadCrumb>
  );
};

export default HomeBreadCrumb;

const StyledHomeBreadCrumb = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  gap: 8px;

  span {
    color: #999;
    font-size: 14px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .bread-crumb__active {
    color: #f5333f !important;
  }
`;
