import {createEvent} from 'api/event';
import {QUERY_KEYS} from 'constants/queryKeys';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.EVENT_DETAIL]});
    },
  });
};
