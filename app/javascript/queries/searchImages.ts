import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { searchPhotosApi, UNSPLASH_URL } from '@app/api/routes';
import { ISearchImagePayload } from '@app/types/searchImages';
import { IUnsplashImages } from '@app/types/unsplashImages';

const getRequestConfig: AxiosRequestConfig = {
  baseURL: UNSPLASH_URL,
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
};

export const searchImages = async ({
  searchTerm,
}: ISearchImagePayload): Promise<IUnsplashImages | AxiosError> => {
  let resp: IUnsplashImages | AxiosError;
  try {
    const { data } = await axios.get(searchPhotosApi.searchPhotos, {
      params: {
        query: searchTerm,
      },
      ...getRequestConfig,
    });
    resp = data;
  } catch (error) {
    resp = error;
  }
  return resp;
};
