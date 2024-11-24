import {useQuery} from '@tanstack/react-query';
import {loadCheckInList} from 'api/loadCheckInList';
import {QUERY_KEYS} from 'constants/queryKeys';

interface CheckInStudent {
  id: string;
  name: string;
  bandName: string;
  eventStudentStatus: string;
  checkInTime: string; // 원본 데이터를 그대로 유지
}

export const useGetCheckInList = (eventId: number) => {
  const {data, isLoading, isError, refetch} = useQuery<CheckInStudent[]>({
    queryKey: [QUERY_KEYS.EVENT_CHECK_IN_LIST, eventId], // 캐싱 키 설정
    queryFn: async () => {
      const res = await loadCheckInList(eventId);
      // 데이터를 가공하지 않고 API에서 받은 원본 그대로 반환
      return res as CheckInStudent[];
    },
    enabled: !!eventId, // eventId가 유효할 때만 쿼리 실행
    refetchInterval: 1000, // 1초마다 자동 갱신
  });

  return {
    students: data ?? [], // 데이터가 없을 경우 빈 배열을 반환
    isLoading, // 로딩 상태
    isError, // 에러 상태
    refetch, // 수동 리패치 함수
  };
};
