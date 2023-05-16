import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EMAIL_REQUEST, LOGIN_BUTTON, PASSWORD_REQUEST } from '../../../utils/constants/loginConstants';
import { useCookies } from 'react-cookie';
import { LoginFormBox, LoginInput, CheckBoxLabel, CheckBox, IDManagementBox, FindIdBox } from './index.styles';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from '@recoil/login';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
const REGEX_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

export interface SignInForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);

  const onLogin = ({ email, password }: SignInForm) => {
    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then(onLoginSuccess)
      .catch((error) => {
        console.log(error);
      });
  };

  const onSilentRefresh = () => {
    axios
      .post('/auth/token/refresh', {
        email,
        password,
      })
      .then(onLoginSuccess)
      .catch((error) => {
        if (error?.response?.status === 401) {
          setUser(false);
          alert('세션이 만료되어 다시 로그인 해주세요');
          navigate('/auth/login');
        }
      });
  };

  const onLoginSuccess = (response: any) => {
    const { accessToken } = response.data;
    setUser(true);

    setCookie('rememberEmail', email);
    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    navigate('/');

    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  };

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

    if (!REGEX_EMAIL.test(email)) {
      alert('이메일 형식에 맞게 입력해주세요');
      setEmail('');
      return;
    }

    if (password.length < 8 || password.length > 16) {
      alert('비밀번호는 8~16자를 입력해주세요');
      setPassword('');
      return;
    }

    onLogin({ email, password });
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsRemember(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCookie('rememberEmail', email, { maxAge: 2000 });
    } else {
      removeCookie('rememberEmail');
    }
  };

  useEffect(() => {
    if (cookies.rememberEmail !== undefined) {
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
  }, []);

  return (
    <LoginFormBox onSubmit={handleLoginSubmit}>
      <LoginInput name="email" type="email" placeholder={EMAIL_REQUEST} onChange={handleEmail} value={email} required />
      <LoginInput
        name="password"
        type="password"
        placeholder={PASSWORD_REQUEST}
        onChange={handlePassword}
        value={password}
        required
      />

      <IDManagementBox>
        <div>
          <CheckBoxLabel htmlFor="checkId">
            <CheckBox type="checkbox" id="checkId" onChange={handleOnChange} checked={isRemember} />
            아이디 저장
          </CheckBoxLabel>
        </div>
        <FindIdBox>
          <Link to={'/users/help/id'}>아이디 찾기</Link>
          <div> | </div>
          <Link to={'/users/help/pwd'}>비밀번호 찾기</Link>
        </FindIdBox>
      </IDManagementBox>
      <LoginInput type="submit" value={LOGIN_BUTTON} />
    </LoginFormBox>
  );
};
export default LoginForm;
