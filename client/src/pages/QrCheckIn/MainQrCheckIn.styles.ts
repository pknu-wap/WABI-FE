import styled from "styled-components";

export const Text = styled.div`
    font-family: Noto Sans;
    text-align: left;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding:0;
    margin:0;
    background-color: #F0F4F7;
`;

export const Event = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 20px 40px 20px;
    padding: 30px 43px 60px 40px;
    border-radius: 10px;
    line-height: 27.24px;
    gap:10px;
`

export const EventContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height:400px;
    padding:40px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px lightgray;
    background-color: white;
`

export const EventName = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    background-color: white;
    line-height: 80px;
`

export const Line = styled("div")`
    height:1px;
    background-color:#F0F4F7;
    border:0;
`

export const EventTime = styled(Text)`
    display: flex;
    flex-direction: column;
    font-size: 20px;
`

export const GroupBox = styled(Text)`
    text-align:center;
    font-size: 20px;
    color: #697077;
`

export const Qr = styled.div`
    width: 100%;
    max-width:1050px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left:100px;
    margin-right:100px;
    padding:20px;
    border-radius:10px;
    background-color: white;
`

export const QrBox = styled.div<{ qrColor: string }>`
    margin-top:10px;
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
    margin-bottom: 25px;
    text-align:center;
`