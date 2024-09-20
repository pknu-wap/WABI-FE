import React from 'react';
import useCheckInGroup from '../../../hooks/useCheckInEvent';
import GroupCard from 'components/event_detail/GroupCard/GroupCard';
import * as Styled from 'components/event_detail/CheckInGroup/CheckInGroup.styles';
interface CheckInGroupProps {
  eventId: string;
}

const CheckInGroup: React.FC<CheckInGroupProps> = ({eventId}) => {
  const {groups} = useCheckInGroup(eventId);

  return (
    <Styled.CheckInLayout>
      {groups.map(group => (
        <GroupCard groupName={group.groupName} />
      ))}
    </Styled.CheckInLayout>
  );
};

export default CheckInGroup;
