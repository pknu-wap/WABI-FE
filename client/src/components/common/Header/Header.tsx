import React from 'react';
import * as Styled from 'components/common/Header/Header.styles';
import Logo from 'components/common/Logo/Logo';
import Button from 'components/common/Button/Button';

const Header = () => {
  return (
    <Styled.HeaderStyles>
      <Styled.LogoGroup>
        <Logo
          src={'images/wabi.png'}
          alt={'logo1'}
          text={'WABI'}
          width={'40px'}
          height={'40px'}
          redirectUrl={'/'}
        />
        <Logo
          src={'images/user.png'}
          alt={'logo2'}
          text={'WAP'}
          width={'30px'}
          height={'30px'}
        />
      </Styled.LogoGroup>
      <Button
        width="60px"
        height="32px"
        buttonColor="#4E54F5"
        borderRadius="10px"
        fontColor="white"
        fontSize="16px"
        padding="10px 16px 10px 16px"
      >
        Login
      </Button>
    </Styled.HeaderStyles>
  );
};

export default Header;
