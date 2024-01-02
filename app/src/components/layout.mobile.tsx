import React from 'react';
import styled from 'styled-components';
import {
  FloatLeftIcon,
  FloatRightIcon,
  IconArrowLeft,
  IconLogout,
  IconPlus,
  Navbar,
  WelcomeText,
} from '../styles/common.style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { setLogout } from '../store/user.slice';

const Wrapper = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 16px 32px;
  box-sizing: border-box;
  width: 480px;
  background: white;
  position: relative;
`;

interface MyComponentProps {
  children: React.ReactNode;
  isBack?: boolean;
}

const LayoutMobile: React.FC<MyComponentProps> = (props) => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem('token');
    dispatch(setLogout());
    navigate('/');
  };

  return (
    <Wrapper>
      <Container>
        {user.isAuth && (
          <Navbar>
            <FloatLeftIcon>
              {props.isBack && (
                <div role='button' onClick={() => navigate('/vote')}>
                  <IconArrowLeft />
                </div>
              )}
              {user.isAuth && (
                 <WelcomeText>Hi, {user.name}</WelcomeText>
              )}
            </FloatLeftIcon>

            <FloatRightIcon>
              <div role='button' onClick={() => navigate('/vote-setup')}>
                <IconPlus />
              </div>
              <div role='button' onClick={onLogout}>
                <IconLogout width='32px' />
              </div>
            </FloatRightIcon>
          </Navbar>
        )}

        {props.children}
      </Container>
    </Wrapper>
  );
};

export default LayoutMobile;
