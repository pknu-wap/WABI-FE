import React, {useEffect, useState} from 'react';
import {LoadGroupList} from 'api/loadGroupList';
import {Band} from 'types/groupTypes';
import * as Styled from 'components/EventGroupSwitcher/GroupCard/GroupCard.styles';
import {useRecoilState} from 'recoil';
import {selectedBandIdState} from 'recoil/currentBandId';

const GroupCard = () => {
  const [groups, setGroupList] = useState<Band[]>([]); // State to store event data
  const [selectedBandId, setSelectedBandId] =
    useRecoilState(selectedBandIdState);

  useEffect(() => {
    LoadGroupList().then(filteredEvent => {
      setGroupList(filteredEvent);
    });
  }, []);

  const handleCardClick = (bandId: number) => {
    setSelectedBandId(bandId);
  };

  return (
    <>
      {groups.map((group: Band) => (
        <Styled.GroupCard
          onClick={() => handleCardClick(group.bandId)}
          className={selectedBandId === group.bandId ? 'selected' : ''}
        >
          <Styled.GroupTitle>
            <h2>{group.bandName}</h2>
            <img src="/images/EditEvent.png" alt="EditEvenIcon" />
          </Styled.GroupTitle>
          <h3>50명</h3>
        </Styled.GroupCard>
      ))}
    </>
  );
};

export default GroupCard;
