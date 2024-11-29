import React from 'react';
import GroupCard from 'components/EventAndGroupList/GroupCard/GroupCard';
import * as Styled from 'components/EventAndGroupList/GroupCardList/GroupCardList.styles';
import {useGetGroupList} from '../../../queries/groupQueries/useGetGroupList';

interface EventGroupListProps {
  onUpdateClick: (groupId: number) => void;
  selectedBandId: number | null;
}

const GroupCardList = ({
  onUpdateClick,
  selectedBandId,
}: EventGroupListProps) => {
  const {data: groups = [], isLoading, isError} = useGetGroupList();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>그룹 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

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
