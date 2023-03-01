import React from 'react';
import styled from 'styled-components';

const CampaignItem = () => {
  return (
    <Container>
      <img src="defaultImage.png" alt="가게이미지" />
      <DeadLineText>1일 남음</DeadLineText>
      <StoreNameText>[지역] 가게이름</StoreNameText>
      <ServiceNameText>제공 서비스</ServiceNameText>
      <ApplicationText>신청 0/7명</ApplicationText>
    </Container>
  );
};

const Container = styled.div`
  height: 18rem;
  width: 12rem;
  background-color: whitesmoke;
  & > img {
    width: 12rem;
    height: 12rem;
  }
`;

const DeadLineText = styled.div`
  font-size: 0.5rem;
  font-weight: 700;
  margin: 0.5rem 0.25rem;
`;

const StoreNameText = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0.5rem 0.25rem;
`;

const ServiceNameText = styled.div`
  font-size: 0.5rem;
  font-weight: 400;
  margin: 0.3rem 0.25rem 0.7rem;
`;

const ApplicationText = styled.div`
  font-size: 0.5rem;
  font-weight: 400;
  margin: 0.5rem 0.25rem;
`;

export default CampaignItem;
