import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  MenuWrapper,
  LogoBox,
  KeywordInputBox,
  KeywordInput,
  LoginMenu,
  LoginLinkItem,
  CategoryWrapper,
  DropBoxItem,
  CategoryLinkItem,
} from './index.style';

import DropDownMenu from '././DropDownMenu';
import { useRecoilValue } from 'recoil';
import { userState } from '@recoil/login';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [showDelivery, setShowDelivery] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [keyword, setKeyword] = useState('');
  const isUser = useRecoilValue(userState);

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

  return (
    <Container>
      <MenuWrapper>
        <LogoBox>
          <Link to="/">로고</Link>
        </LogoBox>
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
            <LoginLinkItem to="/users/logout">로그아웃</LoginLinkItem>
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
          배송전체
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
          지역전체
          <DropDownMenu type="region" show={showRegion} />
        </DropBoxItem>
        <CategoryLinkItem to="/category/배송">배송</CategoryLinkItem>
        <CategoryLinkItem to="/category/지역">지역</CategoryLinkItem>
      </CategoryWrapper>
    </Container>
  );
};

export default NavigationBar;
