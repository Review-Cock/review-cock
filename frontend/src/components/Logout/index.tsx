import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@recoil/login';
import axios from 'axios';

const Logout = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    setUser(false);
    axios.defaults.headers.common['Authorization'] = null;
    window.location.href = '/';
  }, []);
  return <div></div>;
};
export default Logout;
