import React, {useEffect, useState} from 'react';
import * as Styled from './EventDetail.styles';
import {useNavigate, useLocation} from 'react-router-dom';
import CheckInTable from 'components/event_detail/CheckInTable/CheckInTable';
import CheckInGroup from 'components/event_detail/CheckInGroup/CheckInGroup';
import Header from 'components/common/Header/Header';
import SearchAndButtonFrame from 'components/common/SearchAndButtonFrame/SearchAndButtonFrame';
import Button from 'components/common/Button/Button';
import SearchBox from 'components/common/SearchBox/SearchBox';
import Title from 'components/common/Title/Title';
import {getEventById} from 'api/event';
import {Band} from 'types/groupTypes';
import CheckInStatus from 'components/event_detail/CheckInStatus/CheckInStatus';
const EventDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventId: string = location.state?.eventId || 'No Event ID'; // 전달된 eventId 받기
  const adminId = 1;

  const [listFilterText, setListFilterText] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [groups, setGroups] = useState<Band[]>([]);
  const [startAt, setStartAt] = useState<string>('');
  const [endAt, setEndAt] = useState<string>('');

  useEffect(() => {
    if (eventId !== 'No Event ID') {
      const eventIdNumber = parseInt(eventId, 10);
      getEventById(eventIdNumber, adminId).then(response => {
        setGroups(response.data.bands);
        setTitle(response.data.eventName);
        const startAtOriginalData = response.data.startAt;
        const endAtOriginalData = response.data.endAt;
        setStartAt(
          startAtOriginalData.slice(0, 10).replaceAll('-', '.') +
            ' ' +
            startAtOriginalData.slice(11, 16).replaceAll('-', '.'),
        );
        setEndAt(
          endAtOriginalData.slice(0, 10).replaceAll('-', '.') +
            ' ' +
            endAtOriginalData.slice(11, 16).replaceAll('-', '.'),
        );
      });
    }
  }, []);

  const navigateToQrScanner = () => {

    navigate('/qrScan', {state: {eventId, title, startAt, endAt}});

  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.InnerLayout>
        <Title titleText={title} />
        <CheckInGroup groups={groups} />
        <SearchAndButtonFrame>
          <SearchBox filterTextChange={setListFilterText} />
          <Styled.StatusAndButtonFrame>
            <CheckInStatus eventId={eventId} adminId={adminId} />
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
          </Styled.StatusAndButtonFrame>
        </SearchAndButtonFrame>
        <CheckInTable eventId={eventId} filterText={listFilterText} />
      </Styled.InnerLayout>
    </Styled.Wrapper>
  );
};

export default EventDetail;
