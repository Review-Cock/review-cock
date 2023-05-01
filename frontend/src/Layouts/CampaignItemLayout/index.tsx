import React from 'react';
import CampaignItem from '../../components/Common/CampaignItem';
import { Container, LinkBox, UpAndBottomWrapper, LeftAndRightWrapper } from './index.styles';

interface CampaignItemLayoutProps {
  containerWidth: number;
  itemWidth: number;
  campaignType: string; // 참가형 or 방문
  content: string; //이용권
  imageUrls: string[];
  name: string; // 상점
  recruitNumber: string; // 총인원
  direction: string;
  application: string;
  link: string;
}

const CampaignItemLayout = (props: CampaignItemLayoutProps) => {
  const {
    containerWidth,
    itemWidth,
    imageUrls,
    campaignType,
    name,
    content,
    application,
    recruitNumber,
    direction,
    link,
  } = props;
  return (
    <Container containerWidth={containerWidth}>
      <LinkBox to={link}>
        {direction === 'topAndBottom' && (
          <UpAndBottomWrapper itemWidth={itemWidth}>
            <img src={imageUrls[0]} alt="가게이미지" />
            <CampaignItem
              campaignType={campaignType}
              name={name}
              content={content}
              application={application}
              recruitNumber={recruitNumber}
            />
          </UpAndBottomWrapper>
        )}

        {direction === 'leftAndRight' && (
          <LeftAndRightWrapper itemWidth={itemWidth}>
            <img src={imageUrls[0]} alt="가게이미지" />
            <CampaignItem
              campaignType={campaignType}
              name={name}
              content={content}
              application={application}
              recruitNumber={recruitNumber}
            />
          </LeftAndRightWrapper>
        )}
      </LinkBox>
    </Container>
  );
};

export default CampaignItemLayout;
