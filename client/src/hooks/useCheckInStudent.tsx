import {useState, useEffect} from 'react';
import axios from 'axios';
import {logIn} from 'api/logIn';
import {useAuthToken} from './useAuthToken';

interface CheckInStudent {
  id: string;
  name: string;
  bandName: string;
  eventStudentStatus: string;
  checkInTime: string;
}

const useCheckInStudent = (eventId: string) => {
  const [students, setStudents] = useState<CheckInStudent[]>([]);
  const token = useAuthToken('seongwon3', 'shin091612@@');

  const LoadCheckInStudent = async (currentToken: string) => {
    if (!currentToken) return;

    try {
      const response = await axios.get(
        `https://zepelown.site/api/events/check-in/${eventId}?filter=ALL`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        },
      );
      const CleanedData = response.data.data;
      const CheckInStudentList = CleanedData.map((student: CheckInStudent) => ({
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
      }));

      setStudents(CheckInStudentList);
    } catch (error) {
      console.log('체크인 명단 불러오기를 실패했습니다', error);

      try {
        const newToken = await logIn('seongwon3', 'shin091612@@');
        localStorage.setItem('token', newToken);
        await LoadCheckInStudent(newToken);
      } catch (loginError) {
        console.error('토큰 갱신 실패', loginError);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (token) {
        LoadCheckInStudent(token);
        console.log('로드');
      }
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, eventId]);

  return {students};
};

export default useCheckInStudent;
