import React from 'react';
import styled from 'styled-components';

import MainPage from '../Layouts/MainPage';
import CampaignSelectBox from '../components/CampaignSelectBox';
const Register = () => {
  return (
    <MainPage>
      <Container>
        <ContentWrapper>
          <Item>
            <CampaignSelectBox />
          </Item>
          <Item>상품명</Item>
          <Item>상품사진</Item>
          <Item>상품사진 등록버튼</Item>
          <Item>캠페인 설명</Item>
          <Item>리뷰정보</Item>
          <Item>필수 키워드</Item>
          <Item>리뷰어미션</Item>
        </ContentWrapper>
        <ContentWrapper>
          <Item>
            기간 입력상자
            <div>신청기간</div>
            <div>발표기간</div>
            <div>체험기간</div>
          </Item>
          <Item>DatePicker</Item>
          <Item>가게위치 입력</Item>
          <Item>체험등록버튼</Item>
        </ContentWrapper>
      </Container>
    </MainPage>
  );
};

const Container = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Item = styled.div`
  width: 100%;
  height: 10rem;
  margin: 5rem;
`;

export default Register;
