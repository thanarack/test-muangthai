import { FormEvent, useState } from 'react';
import LayoutMobile from '../components/layout.mobile';
import {
  Button,
  From,
  Input,
  InputGroup,
  Label,
  LinkSingUp,
  SignUpText,
  Header,
  InputGroupCheckBox,
  CommonLink,
  LoginError,
} from '../styles/common.style';
import useApiSignUp from '../hooks/useApiSignUp';

function SignUp() {
  // State form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Api group
  const apiSignUp = useApiSignUp();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    apiSignUp.mutate({
      email,
      password,
      name,
      role: 'USER',
    });
    e.preventDefault();
  };

  const isDisabled =
    apiSignUp.isPending || !isChecked || !email || !password || !name;

  return (
    <LayoutMobile>
      <Header style={{ marginTop: '16px' }}>Sign Up</Header>
      <From style={{ marginTop: '32px' }} onSubmit={onSubmit}>
        {apiSignUp.isError && (
          <LoginError>Error: Something, {apiSignUp.error?.message}</LoginError>
        )}
        <InputGroup>
          <Label>Email</Label>
          <Input type='email' onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Name</Label>
          <Input type='text' onChange={(e) => setName(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <InputGroupCheckBox>
          <Input
            type='checkbox'
            defaultChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <Label>
            I agree to <CommonLink to='#'>Term of Service</CommonLink> and{' '}
            <CommonLink to='#'>Privacy Policy</CommonLink>
          </Label>
        </InputGroupCheckBox>
        <Button
          role='button'
          disabled={isDisabled}
          type='submit'
          style={{ marginTop: '16px' }}
          $primary
        >
          Continue
        </Button>
      </From>
      <SignUpText>
        Have an Account? <LinkSingUp to={'/'}>Sign In</LinkSingUp>
      </SignUpText>
    </LayoutMobile>
  );
}

export default SignUp;
