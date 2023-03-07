import axios from 'axios';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { useMutation } from 'react-query';
import { KAKAO_AUTH_URI, NAVER_AUTH_URI } from '../api';
import { IUser } from '../types/login';
import {
  EMAIL_REQUEST,
  JOIN_BUTTON,
  LOGIN_BUTTON,
  PASSWORD_REQUEST,
  SITE_NAME,
  SNS_NOTIFICATION,
} from '../utils/LoginConstants';

const Login = () => {
  const navigate = useNavigate();
  const toLoginHandle = () => navigate('/join');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation(({ email, password }: IUser) => axios.post('', { email, password }), {
    onSuccess: (response) => {
      console.log(response);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleEmail = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
    },
    [email],
  );

  const handlePassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value);
    },
    [password],
  );

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <LoginBox>
      <SiteName>
        <Link to="/">{SITE_NAME}</Link>
      </SiteName>

      <LoginForm onSubmit={handleLoginSubmit}>
        <LoginInput name="email" type="email" placeholder={EMAIL_REQUEST} required onChange={handleEmail}></LoginInput>

        <LoginInput
          name="password"
          type="password"
          placeholder={PASSWORD_REQUEST}
          required
          onChange={handlePassword}
        ></LoginInput>
        <LoginInput type="submit" value={LOGIN_BUTTON}></LoginInput>
      </LoginForm>

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

const SiteName = styled.div`
  margin-bottom: 3rem;
  a {
    color: black;
    text-decoration: none;
  }
`;

const LoginForm = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
