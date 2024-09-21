import React, {useEffect} from 'react';
import CreateEventForm from 'components/EventGroupSwitcher/CreateEventForm/CreateEventForm';
import Header from 'components/common/Header/Header';
import EventCardList from 'components/EventGroupSwitcher/EventCardList/EventCardList';
import EventGroupList from 'components/EventGroupSwitcher/EventGroupList/EventGroupList';
import CreateGroupForm from 'components/EventGroupSwitcher/CreateGroupForm/CreateGroupForm';
import * as Styled from 'pages/EventGroupSwitcher/EventGroupSwitcher.styles';
import {useRecoilValue} from 'recoil';
import {selectedEventIdState} from 'recoil/currentEventId';

const EventGroupSwitcher = () => {
  const selectedEventId = useRecoilValue(selectedEventIdState);
  const selectedBandId = useRecoilValue(selectedEventIdState);

  useEffect(() => {}, [selectedEventId]);

  return (
    <>
      <Header />
      <Styled.EventGroupWrapper>
        <EventCardList />
        <Styled.DivideLine />
        {selectedEventId && <CreateEventForm eventId={selectedEventId} />}
        {/*  <EventGroupList/>*/}
        {/*  <Styled.DivideLine/>*/}
        {/*  {selectedBandIdState && <CreateGroupForm bandId={selectedBandId} />}*/}
      </Styled.EventGroupWrapper>
    </>
  );
};

export default EventGroupSwitcher;
