import styled from "styled-components";

export const Text = styled.div`
    font-family: Noto Sans;
    text-align: left;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    min-height: 100vh;
    padding:0;
    margin:0;
    background-color: #F0F4F7;
`;

export const Event = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    height: 417px;
    margin: 40px 20px 0 20px;
    padding:70px 43px 60px 40px;
    border-radius: 10px;
    line-height: 27.24px;
    gap:10px;

    @media (min-width: 550px) {
        min-width: 550px;
    }
`
export const EventName = styled(Text)`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 850px;
    font-size: 40px;
    line-height: 60px;
`
export const Line = styled("div")`
    height:1px;
    background-color:#F0F4F7;
    border:0;
`

export const EventTime = styled(Text)`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    gap: 45px;
`

export const GroupBox = styled(Text)`
    font-size: 20px;
    color: #697077;
`
export const Qr = styled.div`
    margin-left:20px;
`

export const QrBox = styled.div<{ qrColor: string }>`
    margin-top:40px;
    margin-right:20px;
    background-color: ${({ qrColor }) => qrColor};
    border: 25px solid ${({ qrColor }) => qrColor};
    border-bottom: 20px solid ${({ qrColor }) => qrColor};
    border-radius: 20px;
`

export const QrMessage = styled(Text)<{ messageColor: string }>`
    color: ${({ messageColor }) => messageColor};
    font-size: 32px;
    font-weight: 400;
    line-height: 43.58px;
    margin-top: 25px;
`