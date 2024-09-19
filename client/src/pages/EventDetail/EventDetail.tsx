import React from 'react';
import * as Styled from './EventDetail.styles';
import {useNavigate, useLocation} from 'react-router-dom';
import CheckInTable from 'components/event_detail/CheckInTable/CheckInTable';
import Header from 'components/common/Header/Header';
import SearchAndButtonFrame from 'components/common/SearchAndButtonFrame/SearchAndButtonFrame';

const EventDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventId: string = location.state?.eventId || 'No Event ID'; // 전달된 eventId 받기

  const navigateToQrScanner = () => {
    navigate('/qrScan');
  };

  return (
    <Styled.Wrapper>
      <Header />
      <div>
        <SearchAndButtonFrame>
          <div>검색 박스 준비 중... 🙇🏻‍♂️</div>
          <p>Event ID: {eventId}</p> {/* 전달받은 eventId 표시 */}
          <img
            src="images/qrCheckInButton.png"
            alt={'qrCheckIn'}
            style={{width: '150px', height: '50px'}}
            onClick={navigateToQrScanner}
          />
        </SearchAndButtonFrame>
        <CheckInTable eventId={eventId} />
      </div>
    </Styled.Wrapper>
  );
};

export default EventDetail;
