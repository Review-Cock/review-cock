import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Join from '@pages/Join';
import Register from '@pages/Register';
import Detail from '@pages/Detail';
import Oauth from '@components/Login/Oauth/Oauth';
import FindId from '@pages/FindId';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/join" element={<Join />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/help/id" element={<FindId />} />
        <Route path="/oauth/kakao/callback" element={<Oauth apiUrl="" />} />
        <Route path="/oauth/naver/callback" element={<Oauth apiUrl="" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
