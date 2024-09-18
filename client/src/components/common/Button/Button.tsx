import React, {ReactElement, ReactNode} from 'react';
import {
  ButtonStyle,
  ButtonStyled,
} from 'components/common/Button/Button.styles';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  type = 'button',
  ...buttonProps
}: ButtonProps): ReactElement => {
  return (
    <ButtonStyled type={type} {...buttonProps}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
