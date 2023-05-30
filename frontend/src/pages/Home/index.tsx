import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Common/Carousel';
import CampaignItemLayout from '../../Layouts/CampaignItemLayout';
import MainPage from '../../Layouts/MainPage';
import CarouselTopTimg1 from '../../assets/CarouselTopTimg1.png';
import CarouselTopTimg2 from '../../assets/CarouselTopTimg2.png';
import slippersImg from '../../assets/슬리퍼.jpg';
import coffeeImg from '../../assets/커피.jpg';
import bannerImg from '../../assets/배너.jpg';

import {
  Wrapper,
  Banner,
  CarouselTopLink,
  CarouselTopBox,
  HotCampaignList,
  BannerMiddle,
  LastMinuteTitle,
  LastMinuteReword,
  FixedIconBox,
  LastMinuteWrapper,
  LastMinuteSub,
  LastMinuteSubContents,
  LastMinuteContainer,
  HotCampaignListWithoutCarousel,
} from './index.styles';

import { useRecoilValue } from 'recoil';
import { userState } from '@recoil/login';
import axiosInstance from '@utils/api/axiosInstance';

const CarouselTopImgs = [
  { img: CarouselTopTimg1 },
  { img: CarouselTopTimg2 },
  { img: CarouselTopTimg1 },
  { img: CarouselTopTimg2 },
];

const Home = () => {
  const user = useRecoilValue(userState);
  const [HotCampaignContents, setHotCampaignContents] = useState([]);
  const [LastMinuteContents, setLastMinuteContents] = useState([]);

  const filterFromCaregory = (db: any, name: string) => {
    return db.filter((item: any) => item.category === name);
  };

  const LastMinuteContentsObj = [
    {
      subImg: slippersImg,
      subContents: ['생활  캠페인', '생활을 통해서 얻는 깨달음의 재미'],
      contents: filterFromCaregory(LastMinuteContents, 'LIFE'),
    },

    {
      subImg: coffeeImg,
      subContents: ['서비스 캠페인', '서비스를 통해서 얻는 깨달음의 재미'],
      contents: filterFromCaregory(LastMinuteContents, 'SERVICE'),
    },

    {
      subImg: slippersImg,
      subContents: ['맛집 캠페인', '맛집을 통해서 얻는 깨달음의 재미'],
      contents: filterFromCaregory(LastMinuteContents, 'FAMOUS_RESTAURANT'),
    },

    {
      subImg: coffeeImg,
      subContents: ['숙박 캠페인', '숙박을 통해서 얻는 깨달음의 재미'],
      contents: filterFromCaregory(LastMinuteContents, 'ACCOMMODATION'),
    },
  ];

  LastMinuteContentsObj.sort((a, b) => {
    return b.contents.length - a.contents.length;
  });

  useEffect(() => {
    axiosInstance
      .get('/campaigns/popular')
      .then((res) => {
        if (res.data.length !== 0) {
          setHotCampaignContents(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/campaigns/deadline')
      .then((res) => {
        if (res.data.length !== 0) {
          setLastMinuteContents(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MainPage>
      <Wrapper>
        <Banner>
          <Carousel containerWidth={1000} itemWidth={500} itemLen={6}>
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
          <h2>가장 핫한!! 캠페인</h2>
          {HotCampaignContents.length > 4 ? (
            <Carousel containerWidth={1000} itemWidth={250} itemLen={HotCampaignContents.length}>
              {HotCampaignContents.map((item, i) => {
                return (
                  <CampaignItemLayout
                    key={item.no}
                    containerWidth={1000}
                    itemWidth={240}
                    imagePaths={item.imagePaths}
                    title={item.title}
                    content={item.content}
                    type={item.type}
                    applyNumber={item.applyNumber}
                    recruitNumber={item.recruitNumber}
                    channelType={item.channelType}
                    direction="topAndBottom"
                    link={`/campaigns/detail/${item.no}`}
                  />
                );
              })}
            </Carousel>
          ) : (
            <HotCampaignListWithoutCarousel>
              {HotCampaignContents.map((item, i) => {
                return (
                  <CampaignItemLayout
                    key={item.no}
                    containerWidth={250}
                    itemWidth={240}
                    imagePaths={item.imagePaths}
                    title={item.title}
                    content={item.content}
                    type={item.type}
                    applyNumber={item.applyNumber}
                    recruitNumber={item.recruitNumber}
                    channelType={item.channelType}
                    direction="topAndBottom"
                    link={`/campaigns/detail/${item.no}`}
                  />
                );
              })}
            </HotCampaignListWithoutCarousel>
          )}
        </HotCampaignList>

        <BannerMiddle src={`${bannerImg}`}></BannerMiddle>

        <LastMinuteContainer>
          <h2>마감 임박!!! 놓치지 마세요</h2>
          <LastMinuteWrapper>
            {LastMinuteContentsObj.map((item, i) => {
              return (
                <ul key={i}>
                  <LastMinuteSub>
                    <img src={item.subImg}></img>
                    <LastMinuteSubContents>
                      <LastMinuteTitle>{item.subContents[0]}</LastMinuteTitle>
                      <LastMinuteReword>{item.subContents[1]}</LastMinuteReword>
                    </LastMinuteSubContents>
                  </LastMinuteSub>

                  {item.contents.map((campaignContents: any) => {
                    return (
                      <li key={campaignContents.no}>
                        <CampaignItemLayout
                          containerWidth={240}
                          itemWidth={240}
                          imagePaths={campaignContents.imagePaths}
                          title={campaignContents.title}
                          content={campaignContents.content}
                          type={campaignContents.type}
                          applyNumber={campaignContents.applyNumber}
                          recruitNumber={campaignContents.recruitNumber}
                          channelType={campaignContents.channelType}
                          link={`/campaigns/detail/${campaignContents.no}`}
                          direction="leftAndRight"
                        />
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </LastMinuteWrapper>
        </LastMinuteContainer>

        <FixedIconBox>
          {user && (
            <Link to="/campaigns/register">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
              </svg>
            </Link>
          )}
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
