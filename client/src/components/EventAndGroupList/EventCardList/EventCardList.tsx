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
      if (!token) return;

      try {
        const filteredEvent = await LoadEventList(token);
        setEvents(filteredEvent);
      } catch {
        console.error('Token invalid, logging in again...');
        const newToken = await logIn('seongwon3', 'shin091612@@');
        localStorage.setItem('token', newToken);
        const filteredEvent = await LoadEventList(newToken);
        setEvents(filteredEvent);
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
