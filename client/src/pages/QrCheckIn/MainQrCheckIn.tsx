import Header from '../../components/common/Header/Header';

import React, {useState} from 'react';
import * as Styled from './MainQrCheckIn.styles';
import QrScan from '../../components/QrCheckIn/QrScan';
import Logo from '../../components/common/Logo/Logo';
import {useLocation} from 'react-router-dom';

const MainQrCheckIn = () => {
  const [message, setMessage] = useState(
    'QR CODE를 화면의 사각형 안에 맞춰주세요.',
  );
  const [messageColor, setMessageColor] = useState('black');
  const [qrColor, setQrColor] = useState<string>('lightgray');

  const location = useLocation();
  const eventId: string = location.state?.eventId || 'No Event ID';
  const title: string = location.state?.title || 'No Title';
  const startAt: string = location.state?.startAt || 'No Start Time';
  const endAt: string = location.state?.endAt || 'No End Time';

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
    <Styled.Wrapper>
      <Header />
      <Styled.InnerLayout>
        <Styled.Event>
          <Styled.Qr>
            <Styled.QrMessage messageColor={messageColor}>
              <div>{message}</div>
            </Styled.QrMessage>
            <Styled.QrBox qrColor={qrColor}>
              <QrScan onScanResult={handleScanResult} eventId={eventId} />
            </Styled.QrBox>
            <Styled.EventName>
              <Logo
                src={'images/eventIcon.png'}
                alt={'logo3'}
                text={''}
                width={'50px'}
                height={'50px'}
              />
              <Styled.EventTitle>{title}</Styled.EventTitle>
            </Styled.EventName>
            <Styled.EventTime>
              <h3>{startAt + ' ~ ' + endAt}</h3>
            </Styled.EventTime>
          </Styled.Qr>
        </Styled.Event>
      </Styled.InnerLayout>
    </Styled.Wrapper>
  );
};

export default MainQrCheckIn;
