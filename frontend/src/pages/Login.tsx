import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { KAKAO_AUTH_URI, NAVER_AUTH_URI } from '../api';
import LoginForm from '../components/LoginForm';
import { JOIN_BUTTON, SITE_NAME, SNS_NOTIFICATION } from '../utils/LoginConstants';

const Login = () => {
  const navigate = useNavigate();
  const toLoginHandle = () => navigate('/join');

  return (
    <LoginBox>
      <SiteName to="/">{SITE_NAME}</SiteName>

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

const SiteName = styled(Link)`
  margin-bottom: 3rem;
  color: black;
  text-decoration: none;
`;

const SnSLoginBox = styled.div`
  margin: 1rem 0px;
  display: flex;
  justify-content: center;
  width: 35%;
  padding: 1rem 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      width: 50%;
      font-size: 13px;
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
    color: #07b753;
    border-radius: 50%;
  }
`;

const KaKaoLogin = styled.a`
  font-size: 25px;
  margin: 0px 10px;
  svg {
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
`;
