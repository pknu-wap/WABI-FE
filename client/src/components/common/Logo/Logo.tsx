import React from 'react';
import {
  LogoContainer,
  LogoImage,
  LogoText,
} from 'components/common/Logo/Logo.styles';

interface LogoProps {
  className?: string;
  src: string;
  alt: string;
  text: string;
}

const Logo = ({className, src, alt, text}: LogoProps) => {
  return (
    <div className={className}>
      <LogoContainer>
        <LogoImage src={src} alt={alt} />
        <LogoText>{text}</LogoText>
      </LogoContainer>
    </div>
  );
};

export default Logo;
