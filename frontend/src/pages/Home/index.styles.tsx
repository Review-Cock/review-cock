import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  margin: 40px 0px;
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
`;

export const Title = styled.div`
  font-size: 36px;
  color: #222222;
  margin-bottom: 40px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 43px;
  font-family: Pretendard;
`;

export const BannerMiddle = styled.img`
  width: 100%;
  height: 200px;
  margin: 60px 0px;
`;

export const LastMinuteBox = styled.div`
  margin: 60px 0px;
  width: 1000px;
`;

export const LastMinuteTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const LastMinuteTopItem = styled.div`
  width: 230px;
  height: 210px;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 15px 15px 15px 15px;
    height: 130px;
    width: inherit;
  }

  a {
    width: inherit;
    color: inherit;
    text-decoration: none;
  }
`;

export const LastMinuteTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding: 20px 0px 9px 0px;
`;

export const LastMinuteReword = styled.div`
  width: 100%;
  font-size: 11px;
  text-align: center;
  color: #888888;
  padding: 0px 0px 40px 0px;
`;

export const LastMinuteBottom = styled.div`
  border-top: 2px solid #222222;
  padding: 30px 0px;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  margin: 30px 0px;
  display: flex;
`;

export const LastMinuteBottomLeft = styled.div`
  width: 50%;
  border-radius: 20px;
  height: inherit;
  margin-right: 20px;
  overflow: hidden;
`;

export const LastMinuteBottomRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LastMinuteBottomRightItem = styled.div`
  border-top: 1px solid #eaeaea;
  box-sizing: border-box;
  height: 100%;
  padding: 30px 0px;

  &:first-child {
    padding-top: 0px;
    border: none;
  }
  &:last-child {
    padding-bottom: 0px;
  }
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
