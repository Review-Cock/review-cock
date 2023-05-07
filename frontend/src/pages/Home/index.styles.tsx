import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 210px;
`;

export const Banner = styled.div`
  margin: 40px 0px;
  width: 1000px;
`;

export const CarouselTopLink = styled(Link)`
  width: 500px;
`;

export const CarouselTopBox = styled.img`
  width: 490px;
  height: 300px;
  border-radius: 30px;
  top: 50%;
  left: 50%;
`;

export const HotCampaignList = styled.div`
  margin: 60px 0px;
  width: 1000px;

  h2 {
    font-size: 36px;
    color: #222222;
    margin-bottom: 40px;
    font-style: normal;
    font-variant: normal;
    font-weight: bold;
    line-height: 43px;
    font-family: Pretendard;
  }
`;

export const BannerMiddle = styled.img`
  width: 1000px;
  height: 200px;
  margin: 60px 0px;
  gap: 10px;
`;

export const LastMinuteContainer = styled.div`
  margin: 60px 0px;
  width: 1000px;

  h2 {
    font-size: 36px;
    color: #222222;
    margin-bottom: 40px;
    font-style: normal;
    font-variant: normal;
    font-weight: bold;
    line-height: 43px;
    font-family: Pretendard;
  }
  a {
    text-decoration: none;
  }

  ul {
    width: 25%;
  }

  li {
    margin: 30px 0px;
  }
`;

export const LastMinuteWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LastMinuteSub = styled.div`
  width: 100%;
  border-radius: 30px;
  img {
    border-radius: 5px;
    width: 100%;
    height: 250px;
  }
`;

export const LastMinuteSubContents = styled.div`
  padding: 20px 0px;
  text-align: center;
`;

export const LastMinuteTitle = styled.div`
  font-size: 20px;
  color: #222222;
  margin-bottom: 40px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 24px;
  font-family: Pretendard;
  margin-bottom: 10px;
`;

export const LastMinuteReword = styled.div`
  width: 100%;
  font-size: 11px;
  color: #888888;
`;

export const FixedIconBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;

  a {
    width: 50px;
    height: 50px;
    margin: 5px 0px;
    border-radius: 5px;
    background-color: #e76969;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: white;
      width: 25px;
      height: 25px;
    }
  }
  button {
    cursor: pointer;
    border-radius: 5px;
    border: none;
    width: 50px;
    height: 50px;
    box-shadow: 3px 3px 6px #00000026;
    background-color: #555555;
    cursor: pointer;
    svg {
      fill: white;
      width: 25px;
      height: 25px;
    }
  }
`;
