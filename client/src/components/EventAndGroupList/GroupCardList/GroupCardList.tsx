import React, {useEffect, useState} from 'react';
import GroupCard from 'components/EventAndGroupList/GroupCard/GroupCard';
import * as Styled from 'components/EventAndGroupList/GroupCardList/GroupCardList.styles';
import {LoadGroupList} from 'api/loadGroupList';
import {Band} from 'types/groupTypes';
import {logIn} from 'api/logIn';
import {useAuthToken} from 'hooks/useAuthToken';

interface EventGroupListProps {
  onUpdateClick: (groupId: number) => void;
  selectedBandId: number | null;
}

const GroupCardList = ({
  onUpdateClick,
  selectedBandId,
}: EventGroupListProps) => {
  const [groups, setGroupList] = useState<Band[]>([]);
  const token = useAuthToken('seongwon3', 'shin091612@@');

  useEffect(() => {
    const fetchEvents = async () => {
      if (!token) return;
      try {
        const filteredEvent = await LoadGroupList(token);
        setGroupList(filteredEvent);
      } catch {
        console.error('Token invalid, logging in again...');
        const newToken = await logIn('seongwon3', 'shin091612@@');
        localStorage.setItem('token', newToken);
        const filteredEvent = await LoadGroupList(newToken);
        setGroupList(filteredEvent);
      }
    };

    fetchEvents();
  }, [token]);

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
