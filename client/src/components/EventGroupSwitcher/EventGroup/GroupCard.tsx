import React, {useEffect, useState} from 'react';
import {LoadGroupList} from 'api/loadGroupList';
import {Band} from 'types/eventTypes';
import * as Styled from 'components/EventGroupSwitcher/EventGroup/GroupCard.styles';

const GroupCard = () => {
  const [groups, setGroupList] = useState<Band[]>([]); // State to store event data

  useEffect(() => {
    LoadGroupList().then(filteredEvent => {
      setGroupList(filteredEvent);
    });
  }, []);

  return (
    <>
      {groups.map((group: Band) => (
        <Styled.GroupCard>
          <Styled.GroupTitle>
            <h2>{group.bandName}</h2>
          </Styled.GroupTitle>
        </Styled.GroupCard>
      ))}
    </>
  );
};

export default GroupCard;
