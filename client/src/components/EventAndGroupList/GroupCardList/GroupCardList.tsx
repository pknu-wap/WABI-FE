import React, {useEffect, useState} from 'react';
import GroupCard from 'components/EventAndGroupList/GroupCard/GroupCard';
import * as Styled from 'components/EventAndGroupList/GroupCardList/GroupCardList.styles';
import {LoadGroupList} from 'api/loadGroupList';
import {Band} from 'types/groupTypes';

interface EventGroupListProps {
  onUpdateClick: (groupId: number) => void;
  selectedBandId: number | null;
}

const GroupCardList = ({
  onUpdateClick,
  selectedBandId,
}: EventGroupListProps) => {
  const [groups, setGroupList] = useState<Band[]>([]); // 그룹 리스트 상태

  useEffect(() => {
    LoadGroupList().then(filteredGroups => {
      setGroupList(filteredGroups);
    });
  }, []);

  return (
    <Styled.GroupListGrid>
      {groups.map(group => (
        <GroupCard
          key={group.bandId}
          group={group}
          onUpdateClick={onUpdateClick}
          isSelected={selectedBandId === group.bandId}
        />
      ))}
    </Styled.GroupListGrid>
  );
};

export default GroupCardList;
