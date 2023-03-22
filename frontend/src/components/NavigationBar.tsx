import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import DropDownMenu from './DropDownMenu';

const NavigationBar = () => {
  const [showDelivery, setShowDelivery] = useState(false);
  const [showRegion, setShowRegion] = useState(false);

  const handleDropBox = useCallback((target: string, type: boolean) => {
    if (target === 'delivery') {
      setShowDelivery(type);
    }
    if (target === 'region') {
      setShowRegion(type);
    }
  }, []);

  return (
    <Container>
      <MenuWrapper>
        <LogoBox>
          <Link to="/">로고</Link>
        </LogoBox>
        <KeywordInputBox>
          <KeywordInput type="text" placeholder="검색어를 입력해 주세요." />
        </KeywordInputBox>
        <LoginMenu>
          <LoginLinkItem to="/login">로그인</LoginLinkItem>
          <span>|</span>
          <LoginLinkItem to="/join">회원가입</LoginLinkItem>
        </LoginMenu>
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

// 네비게이션바 상단

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 25px;
  border-bottom: 1px solid #eaeaea;
  opacity: 1;
`;

const LogoBox = styled.div`
  width: 200px;
  height: 50px;
  background: #f1f1f1 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeywordInputBox = styled.div``;

const KeywordInput = styled.input`
  width: 345px;
  margin-top: 25px;
  border: none;
  border-bottom: 1px solid #707070;
  padding: 0 0 10px 10px;
  outline: none;
  ::placeholder {
    text-align: left;
    font: normal normal normal 14px/16px Pretendard;
    letter-spacing: 0px;
    color: #cccccc;
    opacity: 1;
  }
`;

const LoginMenu = styled.div`
  width: 130px;
  height: 32px;
  background: #f1f1f1 0% 0% no-repeat padding-box;
  border-radius: 500px;
  opacity: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LoginLinkItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  text-align: left;
  font: normal normal normal 14px/16px Pretendard;
  letter-spacing: 0px;
  color: #aaaaaa;
  opacity: 1;
  :hover {
    color: #222222;
  }
`;

// 내비게이션 바 하단
const CategoryTextCss = css`
  text-decoration: none;
  text-align: center;
  font: normal normal medium 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
  :hover {
    background: #ffe4e4 0% 0% no-repeat padding-box;
  }
`;
const CategoryItemCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border: 1px solid #eaeaea;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  border-bottom: 1px solid #eaeaea;
  opacity: 1;
`;

const DropBoxItem = styled.div`
  position: relative;
  ${CategoryTextCss}
  ${CategoryItemCss}
`;

const CategoryLinkItem = styled(Link)`
  ${CategoryTextCss}
  ${CategoryItemCss}
`;

export default NavigationBar;
