import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import searchIcon from '../../../assets/searchIcon.png';

// 네비게이션바 상단

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 25px;
  border-bottom: 1px solid #eaeaea;
  opacity: 1;
`;

export const LogoLink = styled(Link)`
  & > img {
    width: 110px;
  }
`;

export const KeywordInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeywordInput = styled.input`
  width: 345px;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #707070;
  padding: 0 0 10px 10px;
  outline: none;
  background-size: 7%;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 100% center;
  box-sizing: border-box;

  ::placeholder {
    text-align: left;
    font: normal normal normal 14px/16px Pretendard;
    letter-spacing: 0px;
    color: #cccccc;
    opacity: 1;
  }
`;

export const LoginMenu = styled.div`
  width: 130px;
  height: 32px;
  background: #f1f1f1 0% 0% no-repeat padding-box;
  border-radius: 500px;
  opacity: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > span {
    color: #aaaaaa;
  }
`;

export const LoginLinkItem = styled(Link)`
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
export const CategoryTextCss = css`
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
export const CategoryItemCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border: 1px solid #eaeaea;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  border-bottom: 1px solid #eaeaea;
  opacity: 1;
`;

export const DropBoxItem = styled.div`
  position: relative;
  ${CategoryTextCss}
  ${CategoryItemCss}
`;

export const CategoryLinkItem = styled(Link)`
  ${CategoryTextCss}
  ${CategoryItemCss}
`;
