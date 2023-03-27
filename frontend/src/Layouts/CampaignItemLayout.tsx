import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CampaignItem from '../components/CampaignItem';
import { CampaignItemLayoutProps } from '../types/campaignItemLayout';

const CampaignItemLayout = (props: CampaignItemLayoutProps) => {
  const {
    containerWidth,
    itemWidth,
    imgUrl,
    region,
    storeName,
    priceName,
    application,
    total,
    direction,
    mark,
    link,
  } = props;
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
            <Test>
              <CampaignItem
                region={region}
                storeName={storeName}
                priceName={priceName}
                application={application}
                total={total}
              />
            </Test>
          </InSideWrapper>
        )}
      </LinkBox>
    </Container>
  );
};

export default CampaignItemLayout;

const Container = styled.div<{ containerWidth: number }>`
  height: 100%;
  width: ${({ containerWidth }) => `${containerWidth}px`};
`;

const LinkBox = styled(Link)`
  height: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const UpAndBottomWrapper = styled.div<{ itemWidth: number }>`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    border-radius: 20px 20px 0px 0px;
    width: inherit;
    height: 50%;
  }
`;

const LeftAndRightWrapper = styled.div<{ itemWidth: number }>`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  display: flex;
  align-items: center;
  width: inherit;
  position: relative;

  img {
    border-radius: 20px;
    width: 30%;
  }

  div {
    border: none;
  }
`;

const InSideWrapper = styled.div`
  width: 100%;
  height: inherit;
  position: relative;

  img {
    position: absolute;
    height: inherit;
    z-index: 1;
    width: inherit;
  }
`;

const Test = styled.div`
  height: 25%;
  width: 100%;
  bottom: 0px;
  position: absolute;
  z-index: 2;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.8;

  & > div {
    & > div {
      color: #ffffff;
    }

    & > div:last-child {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      margin-top: 15px;

      div,
      span {
        color: #ffffff;
      }

      div {
        &:first-child {
          margin-left: 60px;
        }
      }
    }
  }
`;

const LastMinuteMark = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  background: #f58e8e 0% 0% no-repeat padding-box;
  padding: 6px 8px;
  border-radius: 10px;
  color: whitesmoke;
`;
