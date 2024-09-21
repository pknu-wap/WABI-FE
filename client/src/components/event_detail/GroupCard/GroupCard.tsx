import React from 'react';
import * as Styled from './GroupCard.styles';
import {useNavigate} from 'react-router-dom';

interface GroupCardProps {
  groupId: string;
  groupName: string;
}

const GroupCard = ({groupId, groupName}: GroupCardProps) => {
  const navigate = useNavigate();
  const navigateToGroupDetail = () => {
    navigate('/groupDetail', {state: {groupId}});
  };
  return <Styled.Card onClick={navigateToGroupDetail}>{groupName}</Styled.Card>;
};

export default GroupCard;
