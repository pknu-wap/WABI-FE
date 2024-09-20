import React from 'react';
import * as Styled from './GroupCard.styles';

interface GroupCardProps {
  groupName: string;
}

const GroupCard = ({groupName}: GroupCardProps) => {
  return <Styled.Card>{groupName}</Styled.Card>;
};

export default GroupCard;
