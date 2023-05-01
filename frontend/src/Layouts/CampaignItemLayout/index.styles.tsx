import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div<{ containerWidth: number }>`
  height: 100%;
  width: ${({ containerWidth }) => `${containerWidth}px`};
`;

export const LinkBox = styled(Link)`
  height: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const UpAndBottomWrapper = styled.div<{ itemWidth: number }>`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    border-radius: 20px 20px 0px 0px;
    width: inherit;
    height: 50%;
  }
  div {
    border-radius: 0px 0px 20px 20px;
  }
`;

export const LeftAndRightWrapper = styled.div<{ itemWidth: number }>`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  height: 130px;
  display: flex;
  align-items: center;
  width: inherit;
  position: relative;

  img {
    width: 40%;
    height: inherit;
  }

  div {
    border: none;
  }
`;

export const ParticipationBox = styled.div`
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

export const LastMinuteMark = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  background: #f58e8e 0% 0% no-repeat padding-box;
  padding: 6px 8px;
  border-radius: 10px;
  color: whitesmoke;
`;
