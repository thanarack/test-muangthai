import { useMutation } from '@tanstack/react-query';
import { postVoteUpdate } from '../api';

const useApiVoteUpdate = () => {
  return useMutation({
    mutationFn: postVoteUpdate,
    onSuccess: () => {
      alert('Update vote Success');
    },
    onError: (e) => {
      alert('Update fail: ' + e.message);
    },
  });
};

export default useApiVoteUpdate;
