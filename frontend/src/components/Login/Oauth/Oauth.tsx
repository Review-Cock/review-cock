import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');
  const navigate = useNavigate();

  axios

    .get(`/oauth/naver/callback?code=${code}&state=${state}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log('err', error);
    });

  return <div>1</div>;
};
export default Oauth;
