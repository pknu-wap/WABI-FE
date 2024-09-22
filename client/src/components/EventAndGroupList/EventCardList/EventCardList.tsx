import React from 'react';
import EventCard from 'components/EventAndGroupList/EventCard/EventCard';
import * as Styled from 'components/EventAndGroupList/EventCardList/EventCardList.styles';

const EventCardList = () => {
  return (
    <Styled.EventListGrid>
      <EventCard />
    </Styled.EventListGrid>
  );
};

export default EventCardList;
