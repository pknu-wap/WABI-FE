import styled from 'styled-components';

export const LogoImage = styled.img<{width?: string; height?: string}>`
  width: ${({width}) => width};
  height: ${({height}) => height};
`;

export const LogoText = styled.span<{fontSize?: string}>`
  font-size: ${({fontSize}) => fontSize};
  margin-left: 10px;
`;

export const LogoContainer = styled.div<{redirectUrl?: string}>`
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: ${({redirectUrl}) => (redirectUrl ? 'pointer' : 'default')};
`;
