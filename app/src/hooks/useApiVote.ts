import { useMutation } from '@tanstack/react-query';
import { postVoteSubmit } from '../api';

const useApiVote = () => {
  return useMutation({
    mutationFn: postVoteSubmit,
    onSuccess: () => {
      alert('Vote Success');
    },
    onError: (e) => {
      alert('Vote fail: ' + e.message);
    },
  });
};

export default useApiVote;
