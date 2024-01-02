import { useQuery } from '@tanstack/react-query';
import { VoteListRequest } from '../api/api.spec';
import { getVoteList } from '../api';

const useApiVoteList = (params: VoteListRequest) => {
  return useQuery({
    queryKey: ['vote-list'],
    queryFn: () => getVoteList(params),
    refetchInterval: 0,
    enabled: false
  });
};

export default useApiVoteList;
