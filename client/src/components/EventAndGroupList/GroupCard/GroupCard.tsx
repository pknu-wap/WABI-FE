import React from 'react';
import {Band} from 'types/groupTypes';
import * as Styled from 'components/EventAndGroupList/GroupCard/GroupCard.styles';
import {useNavigate} from 'react-router-dom';

interface GroupCardProps {
  group: Band;
  onUpdateClick: (bandId: number) => void;
  isSelected: boolean;
}

const GroupCard = ({group, onUpdateClick, isSelected}: GroupCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = (bandId: number) => {
    navigate('/groupDetail', {state: {bandId}});
  };

  return (
    <Styled.GroupCard
      onClick={() => handleCardClick(group.bandId)}
      className={isSelected ? 'selected' : ''}
    >
      <Styled.GroupTitle>
        <h2>{group.bandName}</h2>
        <Styled.UpdateButton
          onClick={e => {
            e.stopPropagation();
            onUpdateClick(group.bandId);
          }}
        >
          <Styled.UpdateIcon src="/images/EditEvent.png" alt="EditEvenIcon" />
        </Styled.UpdateButton>
      </Styled.GroupTitle>
    </Styled.GroupCard>
  );
};

export default GroupCard;
