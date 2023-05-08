import React from 'react';
import { Container, TitleText, PriceNameText, ApplicationText, ReionText } from './index.styles';
import blogImg from '../../../assets/blogIcon.png';
import InstagramImg from '../../../assets/인스타로고.png';

interface CampaignItemProps {
  title: string;
  type: string;
  content: string;
  applyNumber: number;
  recruitNumber: number;
  channelType: string;
}

const CampaignItem = (props: CampaignItemProps) => {
  const { title, type, content, applyNumber, recruitNumber, channelType } = props;

  return (
    <Container>
      <TitleText>{title}</TitleText>
      <PriceNameText>{content}</PriceNameText>
      <div>
        <ApplicationText>
          <div>
            신청<span>{applyNumber}</span>명
          </div>
          <div>|</div>
          <div>모집 {recruitNumber}명</div>
        </ApplicationText>
        <ReionText>
          <div>{type === 'EXPERIENCE' ? '지역형' : '배송형'}</div>
          <div>{channelType === 'INSTAGRAM' ? <img src={InstagramImg} /> : <img src={blogImg} />}</div>
        </ReionText>
      </div>
    </Container>
  );
};

export default CampaignItem;
