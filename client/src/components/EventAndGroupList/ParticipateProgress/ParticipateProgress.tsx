import React from 'react';
import * as Styled from './ParticipateProgress.styles';
import {CheckInStatus} from 'types/eventTypes';

const ParticipateProgress = ({checkIn, notCheckIn}: CheckInStatus) => {
  const totalParticipants = checkIn + notCheckIn;
  const checkInPercentage = (checkIn / totalParticipants) * 100;
  return (
    <Styled.ParticipateProgressBox>
      <Styled.ParticipateNum>
        <h3>참여 수</h3>
        <h3>
          {checkIn} / {checkIn + notCheckIn} 명
        </h3>
      </Styled.ParticipateNum>
      <Styled.Progress>
        <Styled.Gauge percentage={checkInPercentage} />
      </Styled.Progress>
    </Styled.ParticipateProgressBox>
  );
};

export default ParticipateProgress;
