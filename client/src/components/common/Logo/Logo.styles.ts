import styled, {css} from 'styled-components';
export const LogoImage = styled.img`
    ${({
           width = 'auto',
           height = 'auto',
       }) => css`
        width: ${width};
        height: ${height};
    `}
`

export const LogoText = styled.span`
    font-size: 24px;
    margin-left: 10px;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
`