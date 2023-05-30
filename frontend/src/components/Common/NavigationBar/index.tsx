import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LogoLink,
  MenuWrapper,
  KeywordInputBox,
  KeywordInput,
  LoginMenu,
  LoginLinkItem,
  CategoryLinkItem,
  CategoryWrapper,
  DropBoxItem,
} from './index.style';

import DropDownMenu from '././DropDownMenu';
import { useRecoilState } from 'recoil';
import { userState } from '@recoil/login';
import mainLogo from '@assets/mainLogo.png';
import axiosInstance from '@utils/api/axiosInstance';
import { LOGOUT_URL } from '@utils/constants/apiConstants';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [showDelivery, setShowDelivery] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [isUser, setIsUser] = useRecoilState(userState);

  const handleDropBox = useCallback((target: string, type: boolean) => {
    if (target === 'delivery') {
      setShowDelivery(type);
    }
    if (target === 'region') {
      setShowRegion(type);
    }
  }, []);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeywordEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search/${keyword}`);
    }
  };

  const handleLogout = () => {
    if (!confirm('정말 로그아웃 하시겠습니까?')) return;

    axiosInstance
      .post(LOGOUT_URL)
      .then(() => {
        setIsUser(false);
        axiosInstance.defaults.headers.common['Authorization'] = null;
      })
      .catch((e) => {
        setIsUser(false);
        console.log(e);
      });
  };

  return (
    <Container>
      <MenuWrapper>
        <LogoLink to="/">
          <img src={mainLogo} alt="메인 로고" />
        </LogoLink>
        <KeywordInputBox>
          <KeywordInput
            type="text"
            placeholder="검색어를 입력해 주세요."
            value={keyword}
            onChange={handleKeyword}
            onKeyDown={handleKeywordEnter}
          />
        </KeywordInputBox>

        {isUser ? (
          <LoginMenu>
            <LoginLinkItem to="/" onClick={handleLogout}>
              로그아웃
            </LoginLinkItem>
            <LoginLinkItem to="/profile">마이페이지</LoginLinkItem>
          </LoginMenu>
        ) : (
          <LoginMenu>
            <LoginLinkItem to="/users/login">로그인</LoginLinkItem>
            <span>|</span>
            <LoginLinkItem to="/users/join">회원가입</LoginLinkItem>
          </LoginMenu>
        )}
      </MenuWrapper>
      <CategoryWrapper>
        <DropBoxItem
          onMouseOver={() => {
            handleDropBox('delivery', true);
          }}
          onMouseLeave={() => {
            handleDropBox('delivery', false);
          }}
        >
          배송
          <DropDownMenu type="delivery" show={showDelivery} />
        </DropBoxItem>
        <DropBoxItem
          onMouseOver={() => {
            handleDropBox('region', true);
          }}
          onMouseLeave={() => {
            handleDropBox('region', false);
          }}
        >
          지역
          <DropDownMenu type="region" show={showRegion} />
        </DropBoxItem>
        {isUser && <CategoryLinkItem to="/campaigns/register">캠페인 등록</CategoryLinkItem>}
      </CategoryWrapper>
    </Container>
  );
};

export default NavigationBar;
