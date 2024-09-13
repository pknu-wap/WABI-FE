import React from 'react';
import * as Styled from './CheckInTable.styles';
import useCheckInStudent from '../../../hooks/useCheckInStudent';

interface CheckInTableProps {
  eventId: string;
}

const CheckInTable: React.FC<CheckInTableProps> = ({eventId}) => {
  const {students} = useCheckInStudent(eventId);

  const eventStudentStatusImage = (rowEventStudentStatus: string) => {
    if (rowEventStudentStatus === 'CHECK_IN') {
      return <img src="images/checkInDot.png" alt="Check In" width={'16px'} />;
    }
    return (
      <img src="images/notCheckInDot.png" alt="Not Check In" width={'16px'} />
    );
  };

  return (
    <>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.ThData>학번</Styled.ThData>
            <Styled.ThData>이름</Styled.ThData>
            <Styled.ThBorder>그룹</Styled.ThBorder>
            <Styled.ThBorder>체크인 상태</Styled.ThBorder>
            <Styled.ThBorder>체크인 시간</Styled.ThBorder>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((row, index) => (
              <tr key={index}>
                <Styled.ThData>{row.id}</Styled.ThData>
                <Styled.ThData>{row.name}</Styled.ThData>
                <Styled.ThBorder>{row.group}</Styled.ThBorder>
                <Styled.ThBorder>
                  {eventStudentStatusImage(row.eventStudentStatus)}
                </Styled.ThBorder>
                <Styled.ThBorder>{row.checkInTime}</Styled.ThBorder>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Styled.Table>
    </>
  );
};

export default CheckInTable;
