import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { searchPhotosApi, UNSPLASH_URL } from '@app/api/routes';
import { ISearchImagePayload } from '@app/types/searchImages';

const getRequestConfig: AxiosRequestConfig = {
  baseURL: UNSPLASH_URL,
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
};

export const searchImages = async ({
  searchTerm,
}: ISearchImagePayload): Promise<AxiosResponse | AxiosError> => {
  let resp: AxiosResponse | AxiosError;
  try {
    const axiosResponse = await axios.get(searchPhotosApi.searchPhotos, {
      params: {
        query: searchTerm,
      },
      ...getRequestConfig,
    });
    resp = axiosResponse;
  } catch (error) {
    resp = error;
  }
  return resp;
};
