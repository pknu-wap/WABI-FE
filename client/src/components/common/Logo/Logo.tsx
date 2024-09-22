import React from 'react';
import * as Styled from 'components/common/Logo/Logo.styles';
import {useNavigate} from 'react-router-dom';

interface LogoProps {
  className?: string;
  src: string;
  alt: string;
  text: string;
  width?: string;
  height?: string;
  fontSize?: string;
  redirectUrl?: string;
}

const Logo = ({
  className,
  src,
  alt,
  text,
  width = 'auto',
  height = 'auto',
  fontSize = '24px',
  redirectUrl,
}: LogoProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (redirectUrl) {
      navigate(`${redirectUrl}`);
    }
  };

  return (
    <div className={className} onClick={handleLogoClick}>
      <Styled.LogoContainer redirectUrl={redirectUrl}>
        <Styled.LogoImage src={src} alt={alt} width={width} height={height} />
        <Styled.LogoText fontSize={fontSize}>{text}</Styled.LogoText>
      </Styled.LogoContainer>
    </div>
  );
};

export default Logo;
