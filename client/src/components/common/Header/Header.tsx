import React from 'react';
import Logo from 'components/common/Logo/Logo';
import {HeaderStyles, LogoGroup} from 'components/common/Header/Header.styles';
import icon from 'icon.png';
import Button from 'components/common/Button/Button';
const Header = () => {
  return (
    <HeaderStyles>
      <LogoGroup>
        <Logo src={icon} alt={'logo1'} text={'WABI'} />
        <Logo src={icon} alt={'logo2'} text={'WAP'} />
      </LogoGroup>
      <Button
        width="50px"
        height="30px"
        buttonColor="white"
        fontColor="indigo"
        fontSize="16px"
      >
        Login
      </Button>
    </HeaderStyles>
  );
};

export default Header;
