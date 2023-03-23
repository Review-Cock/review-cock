import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakakoOauth from './components/KakakoOauth';
import NaverOauth from './components/NaverOauth';
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';
import Register from './pages/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao/callback" element={<KakakoOauth />} />
        <Route path="/oauth/naver/callback" element={<NaverOauth />} />
        <Route path="/join" element={<Join />} />;
        <Route path="/register" element={<Register />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
