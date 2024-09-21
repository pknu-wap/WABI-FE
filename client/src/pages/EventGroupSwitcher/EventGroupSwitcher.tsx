import React, {useEffect, useState} from 'react';
import CreateEventForm from 'components/EventGroupSwitcher/CreateEventForm/CreateEventForm';
import Header from 'components/common/Header/Header';
import EventCardList from 'components/EventGroupSwitcher/EventCardList/EventCardList';
import EventGroupList from 'components/EventGroupSwitcher/EventGroupList/EventGroupList';
import CreateGroupForm from 'components/EventGroupSwitcher/CreateGroupForm/CreateGroupForm';
import TabSwitcher from 'components/EventGroupSwitcher/ToggleTabs/TabSwitcher';
import * as Styled from 'pages/EventGroupSwitcher/EventGroupSwitcher.styles';
import {useRecoilValue} from 'recoil';
import {selectedEventIdState} from 'recoil/currentEventId';
  
const EventGroupSwitcher = () => {
    const [activeTab, setActiveTab] = useState(0);

  const selectedEventId = useRecoilValue(selectedEventIdState);
  const selectedBandId = useRecoilValue(selectedEventIdState);

  useEffect(() => {}, [selectedEventId]);

  return (
      <>
      <Header />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <div>이벤트 관련 콘텐츠</div>}
      {activeTab === 1 && <div>그룹 관련 콘텐츠</div>}
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
