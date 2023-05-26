import axiosInstance from '@utils/api/axiosInstance';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Oauth = ({ apiUrl }: any) => {
  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');
  const navigate = useNavigate();

  if (apiUrl === 'kakao') {
    axiosInstance
      .post(`/auth/login/kakao`, { authorizationCode: code })
      .then((res) => {
        alert('성공');
        console.log(res.data);
      })
      .catch((error) => {
        alert('실패');
        console.log('err', error);
      });
  }

  if (apiUrl === 'naver') {
    axiosInstance
      .post(`/auth/login/naver`, { authorizationCode: code, state })
      .then((res) => {
        alert('성공');
        console.log(res.data);
      })
      .catch((error) => {
        alert('실패');
        console.log('err', error);
      });
  }
  return <div>1</div>;
};
export default Oauth;
