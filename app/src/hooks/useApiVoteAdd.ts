import { useMutation } from '@tanstack/react-query';
import { postVoteAdd } from '../api';

const useApiVoteAdd = () => {
  return useMutation({
    mutationFn: postVoteAdd,
    onSuccess: () => {
      alert('Add new vote Success');
    },
    onError: (e) => {
      alert('Add fail: ' + e.message);
    },
  });
};

export default useApiVoteAdd;
