import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LoginFormBox, LoginInput, CheckBoxLabel, CheckBox, IDManagementBox, FindIdBox } from './index.styles';
import { useRecoilState } from 'recoil';
import { userState } from '@recoil/login';

import {
  EMAIL_REQUEST,
  ACCESS_TOKEN_EXPIRY_TIME,
  LOGIN_BUTTON,
  MAXAGE_REMEMBER_EMAIL,
  PASSWORD_REQUEST,
  REMEMBER_EMAIL_KEY,
  SESSION_EXPIRE_MESSAGE,
} from '../../../utils/constants/loginConstants';
import {
  EMAIL_REGEX,
  EMAIL_REQUEST_MESSAGE,
  PASSWORD_MAXLENGTH,
  PASSWORD_MINLENGTH,
  PASSWORD_REQUEST_MESSAGE,
} from '@utils/constants/joinConstants';
import { LOGIN_API_URL, REFRESH_API_URL } from '@utils/constants/apiConstants';
import { FIND_ID_URL, LOGIN_URL, FIND_PASSWORD_URL, HOME_URL } from '@utils/constants/routesConstants';
import axiosInstance from '@utils/api/axiosInstance';

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
  const [cookies, setCookie, removeCookie] = useCookies([REMEMBER_EMAIL_KEY]);

  const onLogin = ({ email, password }: SignInForm) => {
    axiosInstance
      .post(LOGIN_API_URL, {
        email,
        password,
      })
      .then(onLoginSuccess)
      .catch((error) => {
        console.log(error);
      });
  };

  const onSilentRefresh = () => {
    axiosInstance
      .post(REFRESH_API_URL, {
        email,
        password,
      })
      .then(onLoginSuccess)
      .catch((error) => {
        if (error) {
          setUser(false);
          alert(SESSION_EXPIRE_MESSAGE);
          navigate(LOGIN_URL);
        }
      });
  };

  const onLoginSuccess = (response: any) => {
    const { accessToken } = response.data;
    setUser(true);

    setCookie(REMEMBER_EMAIL_KEY, email);

    // accessToken 설정
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    navigate(HOME_URL);

    setTimeout(onSilentRefresh, ACCESS_TOKEN_EXPIRY_TIME);
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

    if (!EMAIL_REGEX.test(email)) {
      alert(EMAIL_REQUEST_MESSAGE);
      setEmail('');
      return;
    }

    if (password.length < PASSWORD_MINLENGTH || password.length > PASSWORD_MAXLENGTH) {
      alert(PASSWORD_REQUEST_MESSAGE);
      setPassword('');
      return;
    }

    onLogin({ email, password });
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsRemember(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCookie(REMEMBER_EMAIL_KEY, email, { maxAge: MAXAGE_REMEMBER_EMAIL });
    } else {
      removeCookie(REMEMBER_EMAIL_KEY);
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
          <Link to={FIND_ID_URL}>아이디 찾기</Link>
          <div> | </div>
          <Link to={FIND_PASSWORD_URL}>비밀번호 찾기</Link>
        </FindIdBox>
      </IDManagementBox>
      <LoginInput type="submit" value={LOGIN_BUTTON} />
    </LoginFormBox>
  );
};
export default LoginForm;
