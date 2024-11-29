import React from 'react';
import EventCard from 'components/EventAndGroupList/EventCard/EventCard';
import * as Styled from 'components/EventAndGroupList/EventCardList/EventCardList.styles';
import {useGetEventList} from 'queries/eventQueries/useGetEventList';

interface EventCardListProps {
  onUpdateClick: (eventId: number) => void;
  selectedEventId: number | null;
}

const EventCardList = ({
  onUpdateClick,
  selectedEventId,
}: EventCardListProps) => {
  const {data: events = [], isLoading, isError} = useGetEventList();

  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중
  }

  if (isError) {
    return <div>이벤트 데이터를 가져오는 데 실패했습니다.</div>; // 데이터 로드 실패
  }

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
