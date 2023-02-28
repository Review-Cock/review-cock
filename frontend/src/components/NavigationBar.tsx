import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

import DropDownMenu from './DropDownMenu';

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <ItemWrapper>
        <img alt="로고이미지" />
        <DropDownWrapper
          onMouseOver={() => {
            setShowMenu(true);
          }}
          onMouseOut={() => {
            setShowMenu(false);
          }}
        >
          <Item>
            <AiOutlineMenu size={'1rem'} />
            <span>전체 카테고리</span>
          </Item>
          {showMenu && <DropDownMenu />}
        </DropDownWrapper>

        <Item>배송</Item>
        <Item>지역</Item>
        <Item>커뮤니티</Item>
        <Item>등록하기</Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <AiOutlineSearch size={'1.2rem'} />
          <SearchInput type="text" placeholder="체험단 검색" />
        </Item>
        <Item>
          <ProfileIcon />
        </Item>
      </ItemWrapper>
    </Container>
  );
};

const SelectedItem = css`
  &:focus {
    font-weight: 700;
  }
  &:hover {
    font-weight: 700;
  }
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.05rem solid gray;
  width: 100%;
  height: 4rem;
  font-size: 0.8rem;
  min-width: 53.75rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 1.5rem;
  }
`;

const DropDownWrapper = styled.div`
  height: 100%;
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${SelectedItem}
  & > span {
    margin-left: 0.4rem;
  }
`;

const SearchInput = styled.input`
  font-size: 0.7rem;
`;

const ProfileIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: purple;
  border-radius: 1rem;
`;

export default NavigationBar;
