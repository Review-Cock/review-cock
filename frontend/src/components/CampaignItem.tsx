import React from 'react';
import styled from 'styled-components';

import { CampaignItemProps } from '../types/campaignItem';

const CampaignItem = (props: CampaignItemProps) => {
  const { imgUrl, deadLine, region, storeName, serviceName, application, total } = props;

  return (
    <Container>
      <img src={imgUrl} alt="가게이미지" />
      <DeadLineText>{deadLine}</DeadLineText>
      <StoreNameText>
        [{region}] {storeName}
      </StoreNameText>
      <ServiceNameText>{serviceName}</ServiceNameText>
      <ApplicationText>
        신청 {application} / {total}명
      </ApplicationText>
    </Container>
  );
};

const Container = styled.div`
  height: 18rem;
  width: 12rem;
  background-color: whitesmoke;
  margin: 0.5rem;
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
