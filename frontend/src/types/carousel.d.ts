export interface CarouselItemsWrapper {
  translateXAmountLimit: number;
  translateXAmount: number;
}

export interface ICarousel {
  children?: React.ReactNode;
  containerWidth: number;
  itemWidth: number;
}
