import React, { Children, useCallback, useEffect, useState } from 'react';

import {
  CarouselContainer,
  Box,
  NavigationWrapper,
  CarouselItemsWrapper,
  Button,
  Notification,
  Circle,
} from './Carousel.styles';

interface ICarousel {
  children?: React.ReactNode;
  containerWidth: number;
  itemWidth: number;
}

function Carousel({ children, containerWidth, itemWidth, ...others }: ICarousel) {
  const [translateXAmount, setTranslateXAmount] = useState(0);
  const itemCount = Children.toArray(children).length;
  const translateXAmountLimit = itemCount * itemWidth;
  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    if (translateXAmount === 0) {
      setToggle(() => 0);
    }
  }, [translateXAmount]);

  const onClickLeft = useCallback(() => {
    const newTranslateXAmount = (translateXAmount + itemWidth) % translateXAmountLimit;
    setTranslateXAmount(newTranslateXAmount > 0 ? -containerWidth : newTranslateXAmount);
    setToggle(translateXAmount === 0 ? arr.length - 1 : Math.abs(translateXAmount / itemWidth) - 1);
  }, [translateXAmount, itemWidth, translateXAmountLimit, toggle]);

  const onClickRight = useCallback(() => {
    translateXAmount === -containerWidth
      ? setTranslateXAmount(0)
      : setTranslateXAmount((translateXAmount - itemWidth) % translateXAmountLimit);

    setToggle(translateXAmount === 0 ? 1 : Math.abs(translateXAmount / itemWidth) + 1);
  }, [translateXAmount, itemWidth, translateXAmountLimit, toggle]);

  useEffect(() => {
    setTranslateXAmount(0);
  }, [itemWidth]);

  const arr = Array.from({ length: containerWidth / itemWidth + 1 }, (_, i) => i);

  return (
    <>
      <CarouselContainer containerWidth={containerWidth} {...others}>
        <Box>
          <CarouselItemsWrapper translateXAmountLimit={translateXAmountLimit} translateXAmount={translateXAmount}>
            {children}
          </CarouselItemsWrapper>
        </Box>
        <NavigationWrapper navigationWidth={containerWidth}>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={onClickLeft}>
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </Button>

          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={onClickRight}>
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Button>
        </NavigationWrapper>
      </CarouselContainer>
      <Notification containerWidth={containerWidth}>
        {arr.map((item, i) => {
          return <Circle key={i} checked={item === toggle ? true : false} />;
        })}
      </Notification>
    </>
  );
}

export default Carousel;
