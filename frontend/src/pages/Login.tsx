import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { KAKAO_AUTH_URI, NAVER_AUTH_URI } from '../api';
import LoginForm from '../components/LoginForm';
import { JOIN_BUTTON, LOGIN_TITLE, SNS_NOTIFICATION } from '../utils/LoginConstants';
import MainPage from '../Layouts/MainPage';

const Login = () => {
  const navigate = useNavigate();
  const toLoginHandle = () => navigate('/join');

  return (
    <MainPage>
      <LoginBox>
        <Title>{LOGIN_TITLE}</Title>

        <LoginForm />

        <SnSLoginBox>
          <div>{SNS_NOTIFICATION}</div>

          <div>
            <NaverLogin href={NAVER_AUTH_URI}>
              <SiNaver />
            </NaverLogin>
            <KaKaoLogin href={KAKAO_AUTH_URI}>
              <SiKakaotalk />
            </KaKaoLogin>
          </div>
        </SnSLoginBox>

        <JoinBox onClick={toLoginHandle}>{JOIN_BUTTON}</JoinBox>
      </LoginBox>
    </MainPage>
  );
};

export default Login;

const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 36px;
`;

const SnSLoginBox = styled.div`
  padding: 10px 0px 30px 0px;
  margin: 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin: 20px 0px;
      width: 50%;
      font-size: 18px;
      color: #555555;
    }

    &:last-child {
      width: 50%;

      a {
        font-size: 25px;
        margin: 0px 10px;
      }
    }
  }
`;

const NaverLogin = styled.a`
  svg {
    width: 36px;
    height: 36px;
    color: #07b753;
    border-radius: 50%;
  }
`;

const KaKaoLogin = styled.a`
  margin: 0px 10px;

  svg {
    width: 36px;
    height: 36px;
    background-color: #391d1d;
    color: #f3dc03;
    border-radius: 50%;
  }
`;

const JoinBox = styled.button`
  padding: 1rem;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: white;
  background-color: #888888;
  cursor: pointer;
`;
