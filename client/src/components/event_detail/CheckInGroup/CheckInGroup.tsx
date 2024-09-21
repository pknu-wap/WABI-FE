import React from 'react';
import GroupCard from 'components/event_detail/GroupCard/GroupCard';
import * as Styled from 'components/event_detail/CheckInGroup/CheckInGroup.styles';
import {Band} from 'types/groupTypes';

const CheckInGroup = ({groups}: any) => {
  return (
    <Styled.CheckInLayout>
      {groups.map((group: Band) => (
        <GroupCard
          groupId={group.bandId.toString()}
          groupName={group.bandName}
        />
      ))}
    </Styled.CheckInLayout>
  );
};

export default CheckInGroup;
