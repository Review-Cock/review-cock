import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakakoOauth from './components/KakakoOauth';
import NaverOauth from './components/NaverOauth';
import Home from './pages/Home';
import Login from './pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao/callback" element={<KakakoOauth />} />
        <Route path="/oauth/naver/callback" element={<NaverOauth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
