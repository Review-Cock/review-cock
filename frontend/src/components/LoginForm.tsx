import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IUser } from '../types/login';
import { EMAIL_REQUEST, LOGIN_BUTTON, PASSWORD_REQUEST } from '../utils/LoginConstants';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
    <LoginFormBox onSubmit={handleLoginSubmit}>
      <LoginInput name="email" type="email" placeholder={EMAIL_REQUEST} onChange={handleEmail} required />
      <LoginInput name="password" type="password" placeholder={PASSWORD_REQUEST} onChange={handlePassword} required />
      <LoginInput type="submit" value={LOGIN_BUTTON} />
    </LoginFormBox>
  );
};
export default LoginForm;

const LoginFormBox = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
