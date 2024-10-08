import React, {useEffect, useState} from 'react';
import EventCard from 'components/EventAndGroupList/EventCard/EventCard';
import * as Styled from 'components/EventAndGroupList/EventCardList/EventCardList.styles';
import {CheckInInfo} from 'types/eventTypes';
import {LoadEventList} from 'api/loadEventList';

interface EventCardListProps {
  onUpdateClick: (eventId: number) => void;
  selectedEventId: number | null;
}

const EventCardList = ({
  onUpdateClick,
  selectedEventId,
}: EventCardListProps) => {
  const [events, setEvents] = useState<CheckInInfo[]>([]);

  useEffect(() => {
    LoadEventList().then(filteredEvent => {
      setEvents(filteredEvent);
    });
  }, []);
  return (
    <Styled.EventListGrid>
      {events.map(event => (
        <EventCard
          key={event.eventId}
          event={event}
          onUpdateClick={onUpdateClick}
          selectedEventId={selectedEventId}
        />
      ))}
    </Styled.EventListGrid>
  );
};

export default EventCardList;
