import axios from 'axios';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { useMutation } from 'react-query';
import { KAKAO_AUTH_URI } from '../api';

interface IUser {
  email: string;
  password: string;
}

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
      console.log('에러 발생 => ', error);
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
        <Link to="/">리뷰콕</Link>
      </SiteName>

      <LoginForm onSubmit={handleLoginSubmit}>
        <LoginInput
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          required
          onChange={handleEmail}
        ></LoginInput>

        <LoginInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          onChange={handlePassword}
        ></LoginInput>
        <LoginInput type="submit" value="로그인"></LoginInput>
      </LoginForm>

      <SnSLoginBox>
        <div>SNS 계정 로그인</div>
        <div>
          <NaverLogin href="">
            <SiNaver />
          </NaverLogin>
          <KaKaoLogin href={KAKAO_AUTH_URI}>
            <SiKakaotalk />
          </KaKaoLogin>
        </div>
      </SnSLoginBox>

      <JoinBox onClick={toLoginHandle}>회원가입하기</JoinBox>
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
