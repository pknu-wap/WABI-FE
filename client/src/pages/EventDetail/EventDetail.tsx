import React from 'react';
import * as Styled from './EventDetail.styles';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import CheckInTable from '../../components/event_detail/CheckInTable/CheckInTable';
import Header from '../../components/common/Header/Header';
import SearchAndButtonFrame from '../../components/common/SearchAndButtonFrame/SearchAndButtonFrame';

const EventDetail = () => {
  const navigate = useNavigate();
  const navigateToQrScanner = () => {
    navigate('/qrScan');
  };
  return (
    <Styled.Wrapper>
      <Header />
      <div>
        <SearchAndButtonFrame>
          <div>검색 박스 준비 중... 🙇🏻‍♂️</div>

          <img
            src="images/qrCheckInButton.png"
            alt={'qrCheckIn'}
            style={{width: '150px', height: '50px'}}
            onClick={navigateToQrScanner}
          />
        </SearchAndButtonFrame>
        <CheckInTable />
      </div>
    </Styled.Wrapper>
  );
};

export default EventDetail;
