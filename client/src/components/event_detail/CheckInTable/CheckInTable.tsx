import React from 'react';
import * as Styled from './CheckInTable.styles';
import useCheckInStudent from '../../../hooks/useCheckInStudent';

interface CheckInTableProps {
  eventId: string;
  filterText: string;
}

const CheckInTable: React.FC<CheckInTableProps> = ({eventId, filterText}) => {
  const {students} = useCheckInStudent(eventId);

  const eventStudentStatusImage = (rowEventStudentStatus: string) => {
    if (rowEventStudentStatus === 'CHECK_IN') {
      return (
        <img
          src={'images/checkInDot.png'}
          alt="Check In"
          width={'16px'}
          height={'16px'}
        />
      );
    }
    return (
      <img
        src={'images/notCheckInDot.png'}
        alt="Not Check In"
        width={'16px'}
        height={'16px'}
      />
    );
  };

  return (
    <>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.ThData>학번</Styled.ThData>
            <Styled.ThData>이름</Styled.ThData>
            <Styled.ThBorder>체크인 상태</Styled.ThBorder>
            <Styled.ThBorder>그룹</Styled.ThBorder>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students
              .filter(
                row =>
                  (row.id && row.id.includes(filterText)) || // row.id가 undefined가 아닌지 확인
                  (row.name && row.name.includes(filterText)) || // row.name이 undefined가 아닌지 확인
                  (row.group && row.group.includes(filterText)), // row.group이 undefined가 아닌지 확인
              )
              .map(row => (
                <tr key={row.id}>
                  <Styled.ThData>{row.id}</Styled.ThData>
                  <Styled.ThData>{row.name}</Styled.ThData>
                  <Styled.ThBorder>
                    <Styled.CheckInData>
                      <Styled.CheckInImage>
                        {eventStudentStatusImage(row.eventStudentStatus)}
                      </Styled.CheckInImage>
                      <Styled.CheckInTime>{row.checkInTime}</Styled.CheckInTime>
                    </Styled.CheckInData>
                  </Styled.ThBorder>
                  <Styled.ThBorder>{row.group}</Styled.ThBorder>
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
