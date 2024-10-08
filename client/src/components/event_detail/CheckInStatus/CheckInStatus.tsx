import React, {useEffect, useState} from 'react';
import {getEventById} from '../../../api/event';
import * as Styled from 'components/event_detail/CheckInStatus/CheckInStatus.styles';

interface CheckInStatusProps {
  eventId: string;
  adminId: number;
}

const CheckInStatus = ({eventId, adminId}: CheckInStatusProps) => {
  const [checkInCount, setCheckInCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const loadCheckInStatus = () => {
    const eventIdToNumber = parseInt(eventId, 10);

    getEventById(eventIdToNumber, adminId).then(response => {
      const checkInStatus = response.data.checkInStatusCount.checkIn;
      const notCheckInStatus = response.data.checkInStatusCount.notCheckIn;
      const totalStatus = checkInStatus + notCheckInStatus;
      setCheckInCount(checkInStatus);
      setTotalCount(totalStatus);
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      loadCheckInStatus();
      console.log('로드 체크인');
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.CheckInStatusBox>
      {checkInCount} / {totalCount}
    </Styled.CheckInStatusBox>
  );
};

export default CheckInStatus;
