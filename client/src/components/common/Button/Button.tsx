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
}

const Button = ({children, ...buttonProps}: ButtonProps): ReactElement => {
  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>;
};

export default Button;
