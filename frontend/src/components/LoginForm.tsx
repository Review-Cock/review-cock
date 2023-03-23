import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../types/login';
import { EMAIL_REQUEST, LOGIN_BUTTON, PASSWORD_REQUEST } from '../utils/LoginConstants';
import checkIcon from '../assets/checkIcon.png';
import checkedIcon from '../assets/checkedIcon.png';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [userid, setUserid] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);
  const [isRemember, setIsRemember] = useState(false);

  const loginMutation = useMutation(({ email, password }: IUser) => axios.post('', { email, password }), {
    onSuccess: (response) => {
      console.log(response);

      // 성공시 쿠키 저장
      setCookie('rememberUserId', 'hi');

      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleEmail = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
      setUserid(e.currentTarget.value);
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

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsRemember(e.currentTarget.checked);
    if (!e.currentTarget.checked) {
      removeCookie('rememberUserId');
    }
  };

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserid(cookies.rememberUserId);
      setIsRemember(true);
    }
  }, []);

  return (
    <LoginFormBox onSubmit={handleLoginSubmit}>
      <LoginInput
        name="email"
        type="email"
        placeholder={EMAIL_REQUEST}
        onChange={handleEmail}
        required
        id="userid"
        defaultValue={userid}
      />
      <LoginInput name="password" type="password" placeholder={PASSWORD_REQUEST} onChange={handlePassword} required />

      <IDManagementBox>
        <div>
          <CheckBoxLabel htmlFor="checkId">
            <CheckBox type="checkbox" id="checkId" onChange={handleOnChange} checked={isRemember} />
            아이디 저장
          </CheckBoxLabel>
        </div>
        <FindIdBox>
          <Link to={''}>아이디 찾기</Link>
          <div> | </div>
          <Link to={''}>비밀번호 찾기</Link>
        </FindIdBox>
      </IDManagementBox>
      <LoginInput type="submit" value={LOGIN_BUTTON} />
    </LoginFormBox>
  );
};
export default LoginForm;

const LoginFormBox = styled.form`
  margin-top: 50px;
  width: 35%;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;

  &:focus {
    outline-color: #e76969;
  }

  &::placeholder {
    color: #cccccc;
  }

  &:first-child {
    border-radius: 5px 5px 0px 0px;
  }

  &:nth-child(2) {
    border-top: none;
    border-radius: 0px 0px 5px 5px;
  }

  &:last-child {
    margin-top: 20px;
    padding: 20px 15px;
    border: none;
    background-color: #e76969;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  color: #888888;
  cursor: pointer;

  div {
    margin-left: 5px;
  }
`;

const CheckBox = styled.input`
  appearance: none;
  padding: 8px;
  background-size: 100% 100%;
  background-image: url(${checkIcon});
  cursor: pointer;

  &:checked {
    border: transparent;
    background-image: url(${checkedIcon});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

const IDManagementBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  margin: 10px 0px;
  font-size: 14px;
  color: #888888;
`;

const FindIdBox = styled.div`
  display: flex;

  div {
    cursor: pointer;
    &:nth-child(2) {
      margin: 0px 5px;
    }
  }
  a {
    text-decoration: none;
    &:visited {
      color: #888888;
    }
  }
`;
