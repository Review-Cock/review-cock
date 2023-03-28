export interface ICarouselItemsWrapper {
  translateXAmountLimit: number;
  translateXAmount: number;
}

export interface ICarousel {
  children?: React.ReactNode;
  containerWidth: number;
  itemWidth: number;
}
