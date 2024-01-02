import { useMutation } from '@tanstack/react-query';
import { postVoteRemove } from '../api';

const useApiVoteRemove = () => {
  return useMutation({
    mutationFn: postVoteRemove,
    onSuccess: () => {
      alert('Remove Success');
    },
    onError: (e) => {
      alert('Remove fail: ' + e.message);
    },
  });
};

export default useApiVoteRemove;
