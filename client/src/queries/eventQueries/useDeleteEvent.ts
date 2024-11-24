import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteEvent} from 'api/event';
import {QUERY_KEYS} from 'constants/queryKeys';

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      // 성공 시 캐시 무효화
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.EVENT_DETAIL]});
    },
    onError: error => {
      console.error('이벤트 삭제 중 오류:', error);
    },
  });
};
