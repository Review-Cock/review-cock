import React, { useEffect } from 'react';
import Router from './Router';
import axiosInstance from '@utils/api/axiosInstance';
import { userState } from '@recoil/login';
import { useRecoilState } from 'recoil';
import { REFRESH_API_URL } from '@utils/constants/apiConstants';
import { ACCESS_TOKEN_EXPIRY_TIME, SESSION_EXPIRE_MESSAGE } from '@utils/constants/loginConstants';
import { LOGIN_URL } from '@utils/constants/routesConstants';

function App() {
  const [isUser, setIsUser] = useRecoilState(userState);

  const onSilentRefresh = () => {
    axiosInstance
      .post(REFRESH_API_URL)
      .then(onLoginSuccess)
      .catch((error) => {
        // if (error) {
        //   setIsUser(false);
        //   alert(SESSION_EXPIRE_MESSAGE);
        //   window.location.href = LOGIN_URL;
        // }
      });
  };

  const onLoginSuccess = (response: any) => {
    const { accessToken } = response.data;
    setIsUser(true);

    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(onSilentRefresh, ACCESS_TOKEN_EXPIRY_TIME);
  };

  if (isUser) onSilentRefresh();

  return <Router />;
}

export default App;
