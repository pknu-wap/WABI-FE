import React from 'react';
import {LogoContainer, LogoImage, LogoText} from 'components/common/Logo/Logo.styles';

interface LogoProps {
    src: string;
    alt : string;
    text: string;
}

const Logo = ({src, alt, text} : LogoProps) => {

    return (
        <div>
            <LogoContainer>
                <LogoImage src={src} alt={alt} />
                <LogoText>{text}</LogoText>
            </LogoContainer>

        </div>
    )
}


export default Logo;