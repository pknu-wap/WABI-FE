import styled from "styled-components";

const Text = styled.div`
    font-family: Noto Sans;
    text-align: left;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding:0;
    margin:0;
    background-color: #F0F4F7;
    overflow-x: hidden;
`;

const Event = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    height: 417px;
    margin-top: 40px;
    padding: 20px 55px 60px 40px;
    border-radius: 10px;
    gap:5px;
`
const EventName = styled(Text)`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 850px;
    font-size: 40px;
    line-height: 55px;
`
const Line = styled("div")`
    height:1px;
    background-color:#F0F4F7;
    border:0;
`

const EventTime = styled(Text)`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    line-height: 20px;
`

const GroupBox = styled(Text)`
    font-size: 20px;
    color: #697077;
    line-height: 27.24px;
`

const QrBox = styled.div<{ qrColor: string }>`
    margin-top:40px;
    background-color: ${({ qrColor }) => qrColor};
    border: 25px solid ${({ qrColor }) => qrColor};
    border-bottom: 20px solid ${({ qrColor }) => qrColor};
    border-radius: 20px;
`

const QrMessage = styled(Text)<{ messageColor: string }>`
    color: ${({ messageColor }) => messageColor};
    font-size: 32px;
    font-weight: 400;
    line-height: 43.58px;
    margin-top: 20px;
    white-space: normal;
`

export {Wrapper, Event, GroupBox, EventName, Line, EventTime, QrBox, QrMessage};