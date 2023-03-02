import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation } from 'react-query';

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

  const handleLoginSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      loginMutation.mutate({ email, password });
    },
    [email, password],
  );

  return (
    <LoginBox>
      <SiteName>
        <Link to="/">사이트 이름</Link>
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

      <JoinBox onClick={toLoginHandle}>회원가입하기</JoinBox>
    </LoginBox>
  );
};

export default Login;
