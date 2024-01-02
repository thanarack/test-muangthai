/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '../api';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../store/user.slice';
import { useDispatch } from 'react-redux';

const useApiLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (res: any) => {
      localStorage.setItem('token', res.data.data.token);
      const user = {
        id: res.data.data.user.id,
        email: res.data.data.user.email,
        role: res.data.data.user.role,
        name: res.data.data.user.name,
      };
      dispatch(setLogin(user));
      navigate('/vote');
    },
  });
};

export default useApiLogin;
