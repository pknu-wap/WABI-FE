import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteGroup} from 'api/group';
import {QUERY_KEYS} from 'constants/queryKeys';

export const useDeleteGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      // 성공 시 캐시 무효화
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.EVENT_DETAIL]});
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROUP_LIST]});
    },
    onError: error => {
      console.error('이벤트 삭제 중 오류:', error);
    },
  });
};
