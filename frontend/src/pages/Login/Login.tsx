import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { KAKAO_AUTH_URI, NAVER_AUTH_URI } from '../../api';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import { JOIN_BUTTON, LOGIN_TITLE, SNS_NOTIFICATION } from '../../utils/LoginConstants';
import MainPage from '../../Layouts/MainPage';
import { LoginBox, Title, SnSLoginBox, NaverLogin, KaKaoLogin, JoinBox } from './Login.styles';

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
