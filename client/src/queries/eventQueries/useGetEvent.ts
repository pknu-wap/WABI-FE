import {useQuery} from '@tanstack/react-query';
import {getEventById} from 'api/event';
import {QUERY_KEYS} from 'constants/queryKeys';

export const useGetEvent = (eventId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EVENT_DETAIL, eventId],
    queryFn: () => getEventById({eventId}),
  });
};
