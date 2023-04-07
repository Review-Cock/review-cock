import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Common/Carousel';
import CampaignItemLayout from '../../Layouts/CampaignItemLayout';
import MainPage from '../../Layouts/MainPage';
import slippersImg from '../../assets/슬리퍼.jpg';
import coffeeImg from '../../assets/커피.jpg';
import {
  Wrapper,
  Banner,
  CarouselTopLink,
  CarouselTopBox,
  HotCampaignList,
  Title,
  BannerMiddle,
  LastMinuteBox,
  LastMinuteTop,
  LastMinuteTopItem,
  LastMinuteTitle,
  LastMinuteReword,
  LastMinuteBottom,
  LastMinuteBottomLeft,
  LastMinuteBottomRight,
  LastMinuteBottomRightItem,
  FixedIconBox,
} from './index.styles';

const CarouselTopImgs = [{ img: slippersImg }, { img: slippersImg }, { img: slippersImg }, { img: slippersImg }];

const HotCampaignContents = [
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: true,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: true,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
];

const LastMinuteContents = [
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: true,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: false,
    link: '/',
  },
  {
    imgUrl: slippersImg,
    deadLine: '6일남음',
    region: '참가형',
    storeName: '슬리퍼 상점',
    priceName: '4만원 이용권',
    application: 3,
    total: 10,
    mark: true,
    link: '/',
  },
];

const LastMinuteTopItemContents = [
  {
    img: coffeeImg,
    title: '여행을 통해서 얻는 깨달음의 재미',
    reword: '여행 숙박 캠페인',
    link: '/',
  },
  {
    img: coffeeImg,
    title: '여행을 통해서 얻는 깨달음의 재미',
    reword: '여행 숙박 캠페인',
    link: '/',
  },
  {
    img: coffeeImg,
    title: '여행을 통해서 얻는 깨달음의 재미',
    reword: '여행 숙박 캠페인',
    link: '/',
  },
  {
    img: coffeeImg,
    title: '여행을 통해서 얻는 깨달음의 재미',
    reword: '여행 숙박 캠페인',
    link: '/',
  },
];

const Home = () => {
  return (
    <MainPage>
      <Wrapper>
        <Banner>
          <Carousel containerWidth={1000} itemWidth={500}>
            {CarouselTopImgs.map((item, i) => {
              return (
                <CarouselTopLink key={i} to={'/'}>
                  <CarouselTopBox src={`${item.img}`}></CarouselTopBox>
                </CarouselTopLink>
              );
            })}
          </Carousel>
        </Banner>

        <HotCampaignList>
          <Title>가장 핫한!! 캠페인</Title>
          <Carousel containerWidth={1000} itemWidth={250}>
            {HotCampaignContents.map((item, i) => {
              return (
                <CampaignItemLayout
                  key={i}
                  containerWidth={1000}
                  itemWidth={240}
                  imgUrl={item.imgUrl}
                  region={item.region}
                  storeName={item.storeName}
                  priceName={item.priceName}
                  application={item.application}
                  total={item.total}
                  direction="topAndBottom"
                  mark={item.mark}
                  link={item.link}
                />
              );
            })}
          </Carousel>
        </HotCampaignList>

        <BannerMiddle></BannerMiddle>

        <LastMinuteBox>
          <Title>마감 임박!!! 놓치지 마세요</Title>
          <LastMinuteTop>
            {LastMinuteTopItemContents.map((item, i) => {
              return (
                <LastMinuteTopItem key={i}>
                  <Link to={item.link}>
                    <img src={item.img}></img>
                    <div>
                      <LastMinuteTitle>{item.title}</LastMinuteTitle>
                      <LastMinuteReword>{item.reword}</LastMinuteReword>
                    </div>
                  </Link>
                </LastMinuteTopItem>
              );
            })}
          </LastMinuteTop>

          <LastMinuteBottom>
            <LastMinuteBottomLeft>
              <CampaignItemLayout
                containerWidth={500}
                itemWidth={500}
                imgUrl={slippersImg}
                region={'참가형'}
                storeName={'슬리퍼 상점'}
                priceName={'4만원 이용권'}
                application={3}
                total={10}
                direction="inSide"
                mark={true}
                link={'/'}
              />
            </LastMinuteBottomLeft>

            <LastMinuteBottomRight>
              {LastMinuteContents.map((item, i) => {
                return (
                  <LastMinuteBottomRightItem key={i}>
                    <CampaignItemLayout
                      key={i}
                      containerWidth={500}
                      itemWidth={500}
                      imgUrl={item.imgUrl}
                      region={item.region}
                      storeName={item.storeName}
                      priceName={item.priceName}
                      application={item.application}
                      total={item.total}
                      direction="leftAndRight"
                      mark={item.mark}
                      link={item.link}
                    />
                  </LastMinuteBottomRightItem>
                );
              })}
            </LastMinuteBottomRight>
          </LastMinuteBottom>
        </LastMinuteBox>
        <FixedIconBox>
          <Link to="/register">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
            </svg>
          </Link>
          <button onClick={() => window.scrollTo(0, 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
        </FixedIconBox>
      </Wrapper>
    </MainPage>
  );
};

export default Home;
