import {useQuery} from '@tanstack/react-query';
import {getGroupById} from 'api/group';
import {QUERY_KEYS} from 'constants/queryKeys';

export const useGetGroup = (bandId: number, adminId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GROUP_DETAIL, bandId],
    queryFn: () => getGroupById({bandId, adminId}),
  });
};
