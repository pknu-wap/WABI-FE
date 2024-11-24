import {useQuery} from '@tanstack/react-query';
import {LoadEventList} from 'api/loadEventList';
import {QUERY_KEYS} from 'constants/queryKeys';

export const useGetEventList = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EVENT_LIST],
    queryFn: LoadEventList,
  });
};
