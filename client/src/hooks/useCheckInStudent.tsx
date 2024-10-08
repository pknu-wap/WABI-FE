import {useState, useEffect} from 'react';
import apiClient from 'api/apiClient';

interface CheckInStudent {
  id: string;
  name: string;
  bandName: string;
  eventStudentStatus: string;
  checkInTime: string;
}

const useCheckInStudent = (eventId: string) => {
  const [students, setStudents] = useState<CheckInStudent[]>([]);

  const LoadCheckInStudent = () => {
    apiClient
      .get(`/events/check-in/${eventId}?filter=ALL`)
      .then(res => {
        const CleanedData = res.data.data;
        const CheckInStudentList = CleanedData.map(
          (student: CheckInStudent) => ({
            id: student.id,
            name: student.name,
            bandName: student.bandName,
            eventStudentStatus: student.eventStudentStatus,
            checkInTime:
              student.checkInTime !== null
                ? student.checkInTime.slice(0, 10).replaceAll('-', '.') +
                  ' ' +
                  student.checkInTime.slice(11, 16).replaceAll('-', '.')
                : '',
          }),
        );

        setStudents(CheckInStudentList);
      })
      .catch(error => {
        console.log('체크인 명단 불러오기를 실패했습니다', error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      LoadCheckInStudent();
      console.log('로드');
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {students};
};

export default useCheckInStudent;
