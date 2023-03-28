import styled from 'styled-components';

interface ICarouselItemsWrapper {
  translateXAmountLimit: number;
  translateXAmount: number;
}

export const CarouselContainer = styled.div<{ containerWidth: number }>`
  width: ${({ containerWidth }) => `${containerWidth}px`};
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  display: flex;
`;

export const Box = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const NavigationWrapper = styled.div<{ navigationWidth: number }>``;

export const CarouselItemsWrapper = styled.div<ICarouselItemsWrapper>`
  width: ${({ translateXAmountLimit }) => `${translateXAmountLimit}px`};
  height: 100%;
  display: flex;
  transform: translateX(${({ translateXAmount }) => `${translateXAmount}px`});
  transition: transform 0.7s ease-in-out;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 5;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #f1f1f1;
    fill: white;
    font-size: 20px;
    opacity: 1;
    padding: 5px;

    &:hover {
      box-shadow: 3px 3px 6px #540a0a26;
      background-color: #e76969;
    }
  }

  &:first-child {
    position: absolute;
    left: -50px;
  }

  &:last-child {
    position: absolute;
    right: -50px;
  }
`;

export const Notification = styled.div<{ containerWidth: number }>`
  width: ${({ containerWidth }) => `${containerWidth}px`};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<{ checked: boolean }>`
  width: ${({ checked }) => (checked ? `20px` : `10px`)};
  height: 10px;
  border-radius: ${({ checked }) => (checked ? `5px` : `50%`)};
  background-color: ${({ checked }) => (checked ? `#e76969;` : `#eaeaea`)};
  margin: 0px 2px;
`;
