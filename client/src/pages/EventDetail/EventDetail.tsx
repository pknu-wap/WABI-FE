import React, {useState} from 'react';
import * as Styled from './EventDetail.styles';
import {useNavigate, useLocation} from 'react-router-dom';
import CheckInTable from 'components/event_detail/CheckInTable/CheckInTable';
import Header from 'components/common/Header/Header';
import SearchAndButtonFrame from 'components/common/SearchAndButtonFrame/SearchAndButtonFrame';
import Button from 'components/common/Button/Button';
import SearchBox from 'components/common/SearchBox/SearchBox';
import Title from 'components/common/Title/Title';
const EventDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventId: string = location.state?.eventId || 'No Event ID'; // 전달된 eventId 받기

  const [listFilterText, setListFilterText] = useState('');

  const navigateToQrScanner = () => {
    navigate('/qrScan', {state: {eventId}});
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.InnerLayout>
        <Title titleText={'EVENT NAME'} subTitleText={'DEVIL'} />
        <CheckInGroup eventId={eventId} />
        <SearchAndButtonFrame>
          <SearchBox filterTextChange={setListFilterText} />
          <Button
            type="button"
            width={'155px'}
            height={'60px'}
            borderRadius={'10px'}
            buttonColor={'#ffffff'}
            onClick={navigateToQrScanner}
          >
            <Styled.Image
              src={'images/Icon/qrCheckInIcon.png'}
              alt={'qrCheckInIcon'}
            />
            <Styled.Text>QR 체크인</Styled.Text>
          </Button>
        </SearchAndButtonFrame>
        <CheckInTable eventId={eventId} filterText={listFilterText} />
      </Styled.InnerLayout>
    </Styled.Wrapper>
  );
};

export default EventDetail;
