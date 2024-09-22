import React, {useEffect, useState} from 'react';
import * as Styled from 'components/EventGroupSwitcher/EventCard/EventCard.styles';
import {CheckInInfo} from 'types/eventTypes';
import {Band} from 'types/groupTypes';
import {LoadEventList} from 'api/loadEventList';
import {useRecoilState} from 'recoil';
import {selectedEventIdState} from 'recoil/currentEventId';
import ParticipateProgress from 'components/EventGroupSwitcher/ParticipateProgress/ParticipateProgress';

const EventCard = () => {
  const [events, setEvents] = useState<CheckInInfo[]>([]);
  const [selectedEventId, setSelectedEventId] =
    useRecoilState(selectedEventIdState);

  useEffect(() => {
    LoadEventList().then(filteredEvent => {
      setEvents(filteredEvent);
    });
  }, []);

  const handleCardClick = (eventId: number) => {
    setSelectedEventId(eventId);
  };

  return (
    <>
      {events.map((event: CheckInInfo) => (
        <Styled.Card
          key={event.eventId}
          className={selectedEventId === event.eventId ? 'selected' : ''}
        >
          <Styled.EventTitle>
            <h2>{event.eventName}</h2>
            <img
              onClick={() => handleCardClick(event.eventId)}
              src="/images/EditEvent.png"
              alt="EditEvenIcon"
            />
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
          <ParticipateProgress
            checkIn={event.checkIn}
            notCheckIn={event.notCheckIn}
          />
        </Styled.Card>
      ))}
    </>
  );
};

export default EventCard;
