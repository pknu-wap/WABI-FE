import {useState, useEffect} from 'react';
import apiClient from 'api/apiClient';

export interface CheckInGroupData {
  groupId: string;
  groupName: string;
}

const useCheckInEvent = (eventId: string) => {
  const [groups, setGroups] = useState<CheckInGroupData[]>([]);
  const LoadCheckInStudent = () => {
    apiClient
      .get(`/events/${eventId}?adminId=1`)
      .then(res => {
        const CleanedData = res.data.data.bands;
        const CheckInGroupArray = CleanedData.map((group: any) => ({
          groupId: group.bandId,
          groupName: group.bandName,
        }));

        setGroups(CheckInGroupArray);
      })
      .catch(error => {
        console.log('체크인 그룹 명단 불러오기를 실패했습니다', error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      LoadCheckInStudent();
      console.log('로드 그룹');
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {groups};
};

export default useCheckInEvent;
