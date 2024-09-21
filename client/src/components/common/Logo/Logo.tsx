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
  width: string;
  height: string;
}

const Logo = ({className, src, alt, text, width, height}: LogoProps) => {
  return (
    <div className={className}>
      <LogoContainer>
        <LogoImage src={src} alt={alt}  width={width} height={height} />
        <LogoText>{text}</LogoText>
      </LogoContainer>
    </div>
  );
};

export default Logo;
