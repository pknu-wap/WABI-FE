import React from 'react';
import EventCard from 'components/EventGroupSwitcher/EventCard/EventCard';
import * as Styled from 'components/EventGroupSwitcher/EventCardList/EventCardList.styles';

const EventCardList = () => {
  return (
    <Styled.EventListGrid>
      <EventCard />
    </Styled.EventListGrid>
  );
};

export default EventCardList;
