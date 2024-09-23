import styled from 'styled-components';

export const Text = styled.div`
  font-family: Noto Sans;
  text-align: left;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
  background-color: #f0f4f7;
`;

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

export const Event = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1000px;
  margin: 50px 100px 40px 100px;
  padding: 30px 40px 60px 40px;
  border-radius: 10px;
`;

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px lightgray;
  background-color: white;
`;

export const EventName = styled(Text)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  line-height: 80px;
  position: relative;
  top: 10px;
`;

export const EventTitle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  top: 5px;
  font-size: 35px;
`;

export const Line = styled('div')`
  height: 1px;
  background-color: #f0f4f7;
  border: 0;
`;

export const EventTime = styled(Text)`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

export const GroupBox = styled(Text)`
  text-align: center;
  font-size: 20px;
  color: #697077;
`;

export const Qr = styled.div`
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

export const QrBox = styled.div<{qrColor: string}>`
  width: 400px;
  height: 400px;
  margin-top: 10px;
  background-color: ${({qrColor}) => qrColor};
  border: 25px solid ${({qrColor}) => qrColor};
  border-bottom: 20px solid ${({qrColor}) => qrColor};
  border-radius: 20px;
`;

export const QrMessage = styled(Text)<{messageColor: string}>`
  color: ${({messageColor}) => messageColor};
  font-size: 32px;
  font-weight: 400;
  line-height: 43.58px;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
`;
