import {useState, useEffect} from 'react';
import axios from 'axios';
import {useAuthToken} from './useAuthToken';
import {logIn} from 'api/logIn';

export interface CheckInGroupData {
  groupId: string;
  groupName: string;
}

const useCheckInEvent = (eventId: string) => {
  const [groups, setGroups] = useState<CheckInGroupData[]>([]);
  const token = useAuthToken('seongwon3', 'shin091612@@');

  const LoadCheckInStudent = async (currentToken: string) => {
    if (!currentToken) return;
    try {
      const response = await axios.get(
        `https://zepelown.site/api/events/${eventId}?adminId=1`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        },
      );
      const CleanedData = response.data.data.bands;
      const CheckInGroupArray = CleanedData.map((group: any) => ({
        groupId: group.bandId,
        groupName: group.bandName,
      }));

      setGroups(CheckInGroupArray);
    } catch (error) {
      console.log('체크인 그룹 명단 불러오기를 실패했습니다', error);
      try {
        const newToken = await logIn('seongwon3', 'shin091612@@');
        localStorage.setItem('token', newToken);
        await LoadCheckInStudent(newToken);
      } catch (loginError) {
        console.error('토큰 갱신 실패', loginError);
      }
    }

    useEffect(() => {
      const interval = setInterval(() => {
        if (token) {
          LoadCheckInStudent(token);
          console.log('로드');
        }
      }, 2000);

      return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, eventId, groups]);
  };
};

export default useCheckInEvent;
