import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import DropDownMenu from './DropDownMenu';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);

  const onClickSearchForm = () => {
    searchRef.current.focus();
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onKeyPressSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search/${search}`);
    }
  };

  return (
    <Container>
      <ItemWrapper>
        <LinkItem to={'/home'}>
          <img alt="로고이미지" />
        </LinkItem>
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

        <LinkItem to={'/category/배송'}>배송</LinkItem>
        <LinkItem to={'/category/지역'}>지역</LinkItem>
        <LinkItem to={'/community'}>커뮤니티</LinkItem>
        <LinkItem to={'/register'}>등록하기</LinkItem>
      </ItemWrapper>
      <ItemWrapper>
        <Item onClick={onClickSearchForm}>
          <AiOutlineSearch size={'1.2rem'} />
          <SearchInput
            ref={searchRef}
            value={search}
            onChange={onChangeSearch}
            type="text"
            placeholder="체험단 검색"
            onKeyDown={onKeyPressSearch}
          />
        </Item>
        <LinkItem to={isLogin ? '/profile' : '/login'}>
          <ProfileIcon />
        </LinkItem>
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

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  ${SelectedItem}
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
