import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { EMAIL_REQUEST, LOGIN_BUTTON, PASSWORD_REQUEST } from '../../../utils/LoginConstants';
import { useCookies } from 'react-cookie';
import { LoginFormBox, LoginInput, CheckBoxLabel, CheckBox, IDManagementBox, FindIdBox } from './index.styles';

export interface IUser {
  email: string;
  password: string;
}

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
