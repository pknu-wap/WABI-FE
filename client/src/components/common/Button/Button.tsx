import React, {ReactElement, ReactNode} from 'react';
import * as Styled from 'components/common/Button/Button.styles';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Styled.ButtonStyle {
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
    <Styled.ButtonStyled type={type} {...buttonProps}>
      {children}
    </Styled.ButtonStyled>
  );
};

export default Button;
