import {useState, useEffect} from 'react';
import axios from 'axios';

interface CheckInStudent {
  id: string;
  name: string;
  group: string;
  eventStudentStatus: string;
  checkInTime: string;
}

const useCheckInStudent = (eventId: string) => {
  const [students, setStudents] = useState<CheckInStudent[]>([]);

  const LoadCheckInStudent = () => {
    axios
      .get(`https://zepelown.site/api/events/check-in/${eventId}?filter=ALL`)
      .then(res => {
        const CleanedData = res.data.data;

        const CheckInStudent = CleanedData.map((student: any) => ({
          id: student.id,
          name: student.name,
          group: student.band,
          eventStudentStatus: student.eventStudentStatus,
          checkInTime: student.checkInTime,
        }));

        setStudents(CheckInStudent);
      })
      .catch(error => {
        console.log('체크인 명단 불러오기를 실패했습니다', error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      LoadCheckInStudent();
      console.log('로드');
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {students};
};

export default useCheckInStudent;
