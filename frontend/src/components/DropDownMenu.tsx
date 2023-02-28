import React from 'react';
import styled from 'styled-components';

const DropDownMenu = () => {
  return (
    <Container>
      <ItemWrapper>
        <ItemTitle>배송 전체</ItemTitle>
        <Item>생활</Item>
        <Item>서비스</Item>
        <Item>유아동</Item>
        <Item>디지털</Item>
        <Item>뷰티</Item>
        <Item>패션</Item>
        <Item>도서</Item>
        <Item>식품</Item>
        <Item>반려동물</Item>
      </ItemWrapper>
      <ItemWrapper>
        <ItemTitle>지역 전체</ItemTitle>
        <Item>맛집</Item>
        <Item>뷰티</Item>
        <Item>숙박</Item>
        <Item>문화</Item>
        <Item>배달</Item>
        <Item>테이크아웃</Item>
        <Item>기타</Item>
      </ItemWrapper>
      <ItemWrapper>
        <ItemTitle>서비스</ItemTitle>
        <Item>마이페이지</Item>
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  min-width: 25rem;
  height: 20rem;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 4.1rem;
  left: 7rem;
`;

const ItemWrapper = styled.div``;

const ItemTitle = styled.div`
  margin: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const Item = styled.div`
  font-size: 0.8rem;
  margin: 1rem;
  cursor: pointer;
`;

export default DropDownMenu;
