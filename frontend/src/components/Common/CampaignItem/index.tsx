import React from 'react';
import { Container, TitleText, PriceNameText, ApplicationText, ReionText } from './index.styles';

interface CampaignItemProps {
  campaignType: string; // 참가형 or 방문
  content: string; //이용권
  name: string; // 상점
  recruitNumber: string; // 총인원
  application: string;
}

const CampaignItem = (props: CampaignItemProps) => {
  const { campaignType, name, content, application, recruitNumber } = props;

  return (
    <Container>
      <TitleText>{name}</TitleText>
      <PriceNameText>{content}</PriceNameText>
      <div>
        <ApplicationText>
          <div>
            신청<span>{application}</span>명
          </div>
          <div>|</div>
          <div>모집 {recruitNumber}명</div>
        </ApplicationText>
        <ReionText>{campaignType}</ReionText>
      </div>
    </Container>
  );
};

export default CampaignItem;
