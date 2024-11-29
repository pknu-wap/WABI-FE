import {updateGroup} from 'api/group';
import {QUERY_KEYS} from 'constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useUpdateGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROUP_DETAIL]});
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROUP_LIST]});
    },
  });
};
