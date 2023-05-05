import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IOauth {
  apiUrl: string;
}

const Oauth = ({ apiUrl }: IOauth) => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      axios
        .post(apiUrl, {
          code,
        })
        .then((response) => {
          console.log('hi', response);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          navigate('/users/login');
        });
    })();
  }, []);

  return <div>1</div>;
};
export default Oauth;
