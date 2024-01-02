/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
  component: JSX.Element | any;
}

const PrivateRoute = (props: PrivateProps) => {
  const { component: Component } = props;
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = user.isAuth;

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default PrivateRoute;
