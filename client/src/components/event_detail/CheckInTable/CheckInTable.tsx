import React from 'react';
import * as Styled from './CheckInTable.styles';
import {useGetCheckInList} from 'queries/eventQueries/useGetCheckInList';
import {formatCheckInTime} from 'utils/convertToKoreanTime';

interface CheckInTableProps {
  eventId: number;
  filterText: string;
}

const CheckInTable: React.FC<CheckInTableProps> = ({eventId, filterText}) => {
  const {students, isLoading, isError} = useGetCheckInList(eventId);
  console.log(students);
  const renderStatusImage = (status: string) => {
    const isCheckIn = status === 'CHECK_IN';
    return (
      <img
        src={`images/${isCheckIn ? 'checkInDot' : 'notCheckInDot'}.png`}
        alt={isCheckIn ? 'Check In' : 'Not Check In'}
        width="16px"
        height="16px"
      />
    );
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>데이터를 가져오는 중 에러가 발생했습니다.</div>;
  }

  return (
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
              student =>
                (student.id && student.id.includes(filterText)) ||
                (student.name && student.name.includes(filterText)) ||
                (student.bandName && student.bandName.includes(filterText)),
            )
            .map(student => (
              <tr key={student.id}>
                <Styled.ThData>{student.id}</Styled.ThData>
                <Styled.ThData>{student.name}</Styled.ThData>
                <Styled.ThBorder>
                  <Styled.CheckInData>
                    <Styled.CheckInImage>
                      {renderStatusImage(student.eventStudentStatus)}
                    </Styled.CheckInImage>
                    <Styled.CheckInTime>
                      {formatCheckInTime(student.checkInTime)}
                    </Styled.CheckInTime>
                  </Styled.CheckInData>
                </Styled.ThBorder>
                <Styled.ThBorder>{student.bandName}</Styled.ThBorder>
              </tr>
            ))
        ) : (
          <tr>
            <td colSpan={4}>데이터가 없습니다.</td>
          </tr>
        )}
      </tbody>
    </Styled.Table>
  );
};

export default CheckInTable;
