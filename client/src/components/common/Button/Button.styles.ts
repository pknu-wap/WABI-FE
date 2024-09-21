import styled, {css} from 'styled-components';

//TODO
// hover 처리도 추가하기

export interface ButtonStyle {

    width?: string;
    height?: string;
    buttonColor?: string;
    hasBorder?: string;
    borderColor?: string;
    borderRadius?: string;
    fontColor?: string;
    fontSize?: string;
    padding?:string;
}

export const ButtonStyled = styled.button<ButtonStyle>`
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    ${({
        width = 'auto',
        height = 'auto',
        buttonColor = 'auto',
        hasBorder = 'false',
        borderColor = 'white',
        borderRadius = 'auto',
        fontColor = 'auto',
        fontSize = 'auto',
        padding = '5px',
       }) => css`
        width: ${width};
        height: ${height};
        background-color: ${buttonColor};
        border: ${hasBorder ? `1px solid ${borderColor}` : 'none'};
        border-radius: ${borderRadius};
        color: ${fontColor};
        font-size: ${fontSize};
        padding: ${padding};
    `}
`

