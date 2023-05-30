import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk } from 'react-icons/si';

import LoginForm from '../../components/Login/LoginForm';
import { JOIN_BUTTON, LOGIN_TITLE, SNS_NOTIFICATION } from '../../utils/constants/loginConstants';
import MainPage from '../../Layouts/MainPage';
import { LoginBox, Title, SnSLoginBox, NaverLogin, KaKaoLogin, JoinBox } from './index.styles';

export const KAKAO_REDIRECT_URI = `http://localhost:3000/oauth/kakao/callback`;
export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const NAVER_REDIRECT_URI = `http://localhost:3000/oauth/naver/callback`;
export const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
  process.env.REACT_APP_NAVER_CLIENT_ID
}&state=${`${Math.random().toString(36).substr(3, 14)}`}&redirect_uri=${NAVER_REDIRECT_URI}`;

const Login = () => {
  const navigate = useNavigate();
  const toLoginHandle = () => navigate('/users/join');

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
