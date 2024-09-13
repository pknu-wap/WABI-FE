import Header from '../../components/common/Header/Header';

import React, {useState} from 'react';
import * as Styled from './MainQrCheckIn.styles';
import QrScan from '../../components/QrCheckIn/QrScan';
import icon from '../../icon.png';
import Logo from '../../components/common/Logo/Logo';
import {useLocation, useNavigate} from 'react-router-dom';

const MainQrCheckIn = () => {
  const [message, setMessage] = useState(
    'QR CODE를 화면의 사각형 안에 맞춰주세요.',
  );
  const [messageColor, setMessageColor] = useState('black');
  const [qrColor, setQrColor] = useState<string>('lightgray');

  const navigate = useNavigate();
  const location = useLocation();
  const eventId: string = location.state?.eventId || 'No Event ID';

  const handleScanResult = (
    newMessage: string,
    newMessageColor: string,
    newQrColor: string,
  ) => {
    setMessage(newMessage);
    setMessageColor(newMessageColor);
    setQrColor(newQrColor);
  };

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.Event>
          <Styled.EventName>
            <Logo src={icon} alt={'logo1'} text={''} />
            <h2>WAP 2024 2학기 개강총회</h2>
          </Styled.EventName>
          <Styled.Line></Styled.Line>
          <Styled.EventTime>
            <h3>2024.09.13 18:30</h3>
            <h3> ~ </h3>
            <h3>2024.09.13 20:00</h3>
          </Styled.EventTime>
          <Styled.Line></Styled.Line>
          <Styled.GroupBox>
            <p>참가 가능한 그룹</p>
            <p>WAP 2024</p>
          </Styled.GroupBox>
        </Styled.Event>
        <div className="Qr">
          <Styled.QrBox qrColor={qrColor}>
            <QrScan onScanResult={handleScanResult} eventId={eventId} />
          </Styled.QrBox>
          <Styled.QrMessage messageColor={messageColor}>
            <div>{message}</div>
          </Styled.QrMessage>
        </div>
      </Styled.Wrapper>
    </>
  );
};

export default MainQrCheckIn;
