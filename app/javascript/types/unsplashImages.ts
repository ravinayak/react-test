type IUnsplashImage = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
};
export type IUnsplashImages = {
  results: IUnsplashImage[];
};
