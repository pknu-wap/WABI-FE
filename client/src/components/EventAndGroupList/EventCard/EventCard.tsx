import React from 'react';
import * as Styled from 'components/EventAndGroupList/EventCard/EventCard.styles';
import {CheckInInfo} from 'types/eventTypes';
import {Band} from 'types/groupTypes';
import ParticipateProgress from 'components/EventAndGroupList/ParticipateProgress/ParticipateProgress';
import {useNavigate} from 'react-router-dom';

interface EventCardProps {
  event: CheckInInfo;
  onUpdateClick: (eventId: number) => void;
  selectedEventId: number | null;
}

const EventCard = ({event, onUpdateClick, selectedEventId}: EventCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = (eventId: number) => {
    if (eventId) {
      navigate('/eventDetail', {state: {eventId}});
    }
  };

  return (
    <Styled.Card
      className={selectedEventId === event.eventId ? 'selected' : ''}
      onClick={() => handleCardClick(event.eventId)}
    >
      <Styled.EventTitle>
        <h2>{event.eventName}</h2>
        <Styled.UpdateButton
          onClick={e => {
            e.stopPropagation();
            onUpdateClick(event.eventId);
          }}
        >
          <Styled.UpdateIcon src="/images/EditEvent.png" alt="EditEventIcon" />
        </Styled.UpdateButton>
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
  );
};

export default EventCard;
