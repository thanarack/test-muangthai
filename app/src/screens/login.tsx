import LayoutMobile from '../components/layout.mobile';
import {
  Button,
  From,
  Input,
  InputGroup,
  Label,
  LinkSingUp,
  SignUpText,
  SubHeader,
  Header,
  LoginError,
} from '../styles/common.style';
import { FormEvent, useEffect, useState } from 'react';
import useApiLogin from '../hooks/useApiLogin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';

function Login() {
  const user = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const apiLogin = useApiLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isAuth) {
      navigate('/vote');
    }
  }, [navigate, user.isAuth]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    apiLogin.mutate({ email, password });
    e.preventDefault();
  };

  return (
    <LayoutMobile>
      <Header style={{ marginTop: '16px' }}>Sign In</Header>
      <SubHeader style={{ marginTop: '16px' }}>
        Hi there! Nice to see you again.
      </SubHeader>

      <From style={{ marginTop: '32px' }} onSubmit={onSubmit}>
        {apiLogin.isError && (
          <LoginError>
            Error: Something, {apiLogin.error?.message}
          </LoginError>
        )}
        <InputGroup>
          <Label>Email</Label>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button
          disabled={apiLogin.isPending}
          type="submit"
          style={{ marginTop: '16px' }}
          $primary
        >
          Sign In
        </Button>
      </From>
      <SignUpText>
        Haven't an Account? <LinkSingUp to={'/signup'}>Sign Up</LinkSingUp>
      </SignUpText>
    </LayoutMobile>
  );
}

export default Login;
