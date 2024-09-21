import React, {useEffect, useState} from 'react';
import * as Styled from 'components/EventGroupSwitcher/EventCard/EventCard.styles';
import ParticipateProgress from 'components/EventGroupSwitcher/EventCard/ParticipateProgress/ParticipateProgress';
import {EventInfo, Band} from 'types/eventTypes';
import {LoadEventList} from 'api/loadEventList';
import { useRecoilState } from 'recoil';
import { selectedEventIdState } from 'recoil/currentEventId';

const EventCard = () => {
  const [events, setEvents] = useState<EventInfo[]>([]);
  const [selectedEventId, setSelectedEventId] = useRecoilState(selectedEventIdState);

  useEffect(() => {
    LoadEventList().then(filteredEvent => {
      setEvents(filteredEvent);
    });
  }, []);

  const handleCardClick = (eventId: number) => {
    setSelectedEventId(eventId.toString()); // toString()은 제거예정
  };

  return (
      <>
        {events.map((event: EventInfo) => (
            <Styled.Card key={event.eventId} onClick={() => handleCardClick(event.eventId)}>
              <Styled.EventTitle>
                <h2>{event.eventName}</h2>
                <img src="/images/EditEvent.png" alt="EditEvenIcon" />
              </Styled.EventTitle>
              <Styled.EventTime>
                <h3>
                  {event.startAt} &nbsp;&nbsp;<span>{'>'}</span>&nbsp;&nbsp;
                </h3>
                <h3>{event.endAt}</h3>
              </Styled.EventTime>
              <Styled.Group>
                {event.bands.length >= 3 ? (
                    <>
                      {event.bands.slice(0, 3).map((band: Band) => (
                          <h3 key={band.bandId}>{band.bandName}</h3>
                      ))}
                      <h3>외 {event.bands.length - 3}개</h3>
                    </>
                ) : (
                    <>
                      {event.bands.map((band: Band) => (
                          <h3 key={band.bandId}>{band.bandName}</h3>
                      ))}
                      {Array(3 - event.bands.length)
                          .fill(null)
                          .map((_, idx: number) => (
                              <h3 key={`empty-${idx}`}>&nbsp;</h3>
                          ))}
                    </>
                )}
              </Styled.Group>
              <ParticipateProgress />
            </Styled.Card>
        ))}
      </>
  );
};

export default EventCard;
