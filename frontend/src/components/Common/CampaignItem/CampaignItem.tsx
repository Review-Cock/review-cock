import React from 'react';
import { Container, TitleText, PriceNameText, ApplicationText, ReionText } from './CampaignItem.styles';

interface CampaignItemProps {
  region: string;
  storeName: string;
  priceName: string;
  application: number;
  total: number;
}

const CampaignItem = (props: CampaignItemProps) => {
  const { region, storeName, priceName, application, total } = props;

  return (
    <Container>
      <TitleText>{storeName}</TitleText>
      <PriceNameText>{priceName}</PriceNameText>
      <div>
        <ApplicationText>
          <div>
            신청<span>{application}</span>명
          </div>
          <div>|</div>
          <div>모집 {total}명</div>
        </ApplicationText>
        <ReionText>{region}</ReionText>
      </div>
    </Container>
  );
};

export default CampaignItem;
