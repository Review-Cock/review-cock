import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@recoil/login';
import axios from 'axios';
import axiosInstance from '@utils/api/axiosInstance';
import { LOGOUT_URL } from '@utils/constants/apiConstants';

const Logout = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    axiosInstance
      .post(LOGOUT_URL)
      .then(() => {
        setUser(false);
        axios.defaults.headers.common['Authorization'] = null;
        window.location.href = '/';
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div></div>;
};
export default Logout;
