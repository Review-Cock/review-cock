import React from 'react';
import CampaignItem from '../../components/Common/CampaignItem';
import { Container, LinkBox, UpAndBottomWrapper, LeftAndRightWrapper } from './index.styles';

interface CampaignItemLayoutProps {
  containerWidth: number;
  itemWidth: number;
  imagePaths: string[];
  title: string; // 상점
  content: string; //이용권
  type: string; // 참가형 or 방문
  applyNumber: number;
  recruitNumber: number; // 총인원
  channelType: string;
  direction: string;
  link: string;
}

const CampaignItemLayout = (props: CampaignItemLayoutProps) => {
  const {
    containerWidth,
    itemWidth,
    imagePaths,
    title,
    content,
    type,
    applyNumber,
    recruitNumber,
    channelType,
    direction,
    link,
  } = props;

  return (
    <Container containerWidth={containerWidth}>
      <LinkBox to={link}>
        {direction === 'topAndBottom' && (
          <UpAndBottomWrapper itemWidth={itemWidth}>
            <img src={`/images/${imagePaths[0]}`} alt="가게이미지" />
            <CampaignItem
              type={type}
              title={title}
              content={content}
              applyNumber={applyNumber}
              recruitNumber={recruitNumber}
              channelType={channelType}
            />
          </UpAndBottomWrapper>
        )}

        {direction === 'leftAndRight' && (
          <LeftAndRightWrapper itemWidth={itemWidth}>
            <img src={`/images/${imagePaths[0]}`} alt="가게이미지" />
            <CampaignItem
              type={type}
              title={title}
              content={content}
              applyNumber={applyNumber}
              recruitNumber={recruitNumber}
              channelType={channelType}
            />
          </LeftAndRightWrapper>
        )}
      </LinkBox>
    </Container>
  );
};

export default CampaignItemLayout;
