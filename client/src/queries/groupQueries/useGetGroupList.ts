import {useQuery} from '@tanstack/react-query';
import {LoadGroupList} from 'api/loadGroupList';
import {QUERY_KEYS} from 'constants/queryKeys';

export const useGetGroupList = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GROUP_LIST],
    queryFn: LoadGroupList,
  });
};
