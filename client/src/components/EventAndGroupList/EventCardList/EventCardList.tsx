import React, {useEffect, useState} from 'react';
import EventCard from 'components/EventAndGroupList/EventCard/EventCard';
import * as Styled from 'components/EventAndGroupList/EventCardList/EventCardList.styles';
import {CheckInInfo} from 'types/eventTypes';
import {LoadEventList} from 'api/loadEventList';
import {logIn} from 'api/logIn';
import {useAuthToken} from 'hooks/useAuthToken';

interface EventCardListProps {
  onUpdateClick: (eventId: number) => void;
  selectedEventId: number | null;
}

const EventCardList = ({
  onUpdateClick,
  selectedEventId,
}: EventCardListProps) => {
  const [events, setEvents] = useState<CheckInInfo[]>([]);
  const token = useAuthToken('seongwon3', 'shin091612@@');

  useEffect(() => {
    const fetchEvents = async () => {
      if (token) {
        try {
          const filteredEvents = await LoadEventList(token);
          setEvents(filteredEvents);
        } catch (error) {
          console.error('Failed to load events:', error);
        }
      }
    };

    fetchEvents();
  }, [token]);
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
