import { useMutation } from '@tanstack/react-query';
import { postSignup } from '../api';
import { useNavigate } from 'react-router-dom';

const useApiSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      alert('Sign up success');
      navigate('/');
    },
  });
};

export default useApiSignUp;
