import {updateEvent} from 'api/event';
import {QUERY_KEYS} from 'constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.EVENT_DETAIL]});
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.EVENT_LIST]});
    },
  });
};
