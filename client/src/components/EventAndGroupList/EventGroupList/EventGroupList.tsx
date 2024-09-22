import React from 'react';
import GroupCard from 'components/EventAndGroupList/GroupCard/GroupCard';
import * as Styled from 'components/EventAndGroupList/EventGroupList/EventGroupList.styles';

const EventGroupList = () => {
  return (
    <Styled.GroupListGrid>
      <GroupCard />
    </Styled.GroupListGrid>
  );
};

export default EventGroupList;
