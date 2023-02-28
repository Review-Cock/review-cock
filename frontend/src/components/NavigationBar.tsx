import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

const NavigationBar = () => {
  return (
    <Container>
      <ItemWrapper>
        <img alt="로고이미지" />
        <Item>
          <AiOutlineMenu size={'1rem'} />
          <span>전체 카테고리</span>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>배송</Item>
        <Item>지역</Item>
        <Item>커뮤니티</Item>
        <Item>등록하기</Item>
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.05rem solid gray;
  width: 100%;
  min-width: 43.75rem;
  height: 4rem;
  position: fixed;
  top: 0;
  font-size: 0.7rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 1rem;
  }
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
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
