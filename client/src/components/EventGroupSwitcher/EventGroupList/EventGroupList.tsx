import React from 'react';
import GroupCard from 'components/EventGroupSwitcher/GroupCard/GroupCard';
import * as Styled from 'components/EventGroupSwitcher/EventGroupList/EventGroupList.styles';

const EventGroupList = () => {
  return (
    <Styled.GroupListGrid>
      <GroupCard />
    </Styled.GroupListGrid>
  );
};

export default EventGroupList;
