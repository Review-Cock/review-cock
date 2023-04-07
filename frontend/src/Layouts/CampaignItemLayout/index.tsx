import React from 'react';
import CampaignItem from '../../components/Common/CampaignItem';
import {
  Container,
  LinkBox,
  UpAndBottomWrapper,
  LeftAndRightWrapper,
  InSideWrapper,
  ParticipationBox,
  LastMinuteMark,
} from './index.styles';

interface CampaignItemLayoutProps {
  containerWidth: number;
  itemWidth: number;
  imgUrl: string;
  region: string;
  storeName: string;
  priceName: string;
  application: number;
  total: number;
  direction: string;
  mark: boolean;
  link: string;
}

const CampaignItemLayout = (props: CampaignItemLayoutProps) => {
  const { containerWidth, itemWidth, imgUrl, region, storeName, priceName, application, total, direction, mark, link } =
    props;
  return (
    <Container containerWidth={containerWidth}>
      <LinkBox to={link}>
        {direction === 'topAndBottom' && (
          <UpAndBottomWrapper itemWidth={itemWidth}>
            <img src={imgUrl} alt="가게이미지" />
            {mark && <LastMinuteMark>마감임박</LastMinuteMark>}
            <CampaignItem
              region={region}
              storeName={storeName}
              priceName={priceName}
              application={application}
              total={total}
            />
          </UpAndBottomWrapper>
        )}

        {direction === 'leftAndRight' && (
          <LeftAndRightWrapper itemWidth={itemWidth}>
            <img src={imgUrl} alt="가게이미지" />
            {mark && <LastMinuteMark>마감임박</LastMinuteMark>}
            <CampaignItem
              region={region}
              storeName={storeName}
              priceName={priceName}
              application={application}
              total={total}
            />
          </LeftAndRightWrapper>
        )}

        {direction === 'inSide' && (
          <InSideWrapper>
            <img src={imgUrl} alt="가게이미지" />
            <LastMinuteMark>마감임박</LastMinuteMark>
            <ParticipationBox>
              <CampaignItem
                region={region}
                storeName={storeName}
                priceName={priceName}
                application={application}
                total={total}
              />
            </ParticipationBox>
          </InSideWrapper>
        )}
      </LinkBox>
    </Container>
  );
};

export default CampaignItemLayout;
