import React, { FC, MouseEventHandler } from 'react';
import tw, { styled } from 'twin.macro';

interface BaseButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<any>;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  fullWidth?: boolean;
  weight?: 'solid' | 'outline' | 'none';
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

type ButtonProps = BaseButtonProps;

const PrimaryButton: FC<ButtonProps> = (props) => {
  const {
    children,
    disabled,
    onClick,
    type,
    fullWidth,
    form,
    weight = 'solid',
    suffix,
    prefix,
    size = 'md',
    isLoading = false,
  } = props;
  return (
    <StyledButton
      onClick={(val) => {
        if (val) onClick?.(val);
      }}
      disabled={disabled}
      type={type}
      form={form}
      fullWidth={fullWidth}
      weight={weight}
      size={size}
    >
      {prefix}
      <span className="button__text__primary">{children}</span>
      {suffix}
    </StyledButton>
  );
};

export default PrimaryButton;

const StyledButton = styled.button<Pick<ButtonProps, 'fullWidth' | 'weight' | 'size'>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.5rem;
  cursor: pointer;

  background: ${(props) => (props.weight === 'solid' ? '#F5333F' : '#ffffff')};
  border: ${(props) => (props.weight === 'outline' ? '1px solid #F94355' : 'none')};
  border-radius: 0.375rem;
  width: ${(props) => (props.fullWidth ? '100%' : '11rem')};
  height: ${(props) => (props.size === 'lg' ? '4rem' : props.size === 'md' ? '3rem' : '2rem')};

  .button__text__primary {
    color: ${(props) =>
      props.weight === 'solid' ? '#FFF' : props.weight === 'outline' ? '#F94355' : '#000'};
    font-size: 16px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }

  &:disabled {
    background-color: #696969;
    cursor: not-allowed;

    .button__text__primary {
      color: #a8a8a8;
    }
  }

  :hover {
    transform: scale(1.03);
    ${tw`shadow-lg`}
  }

  ${tw`transition-all`}
`;
