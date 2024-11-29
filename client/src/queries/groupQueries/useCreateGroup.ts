import {createGroup} from 'api/group';
import {QUERY_KEYS} from 'constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useCreateGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROUP_DETAIL]});
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROUP_LIST]});
    },
  });
};
