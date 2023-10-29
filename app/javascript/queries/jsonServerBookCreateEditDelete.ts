import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import {
  IJsonServerBookEditPayload,
  IJSonServerBookPayload,
  IJsonServerBookCreatePayload,
  IJsonServerBookDeletePayload,
  IJsonServerBook,
} from '@app/types/jsonServerBook';
import { booksApi, DEFAULT_JSON_SERVER_ENDPOINT } from '@app/api/routes';

const requestConfig: AxiosRequestConfig = {
  baseURL: DEFAULT_JSON_SERVER_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
};

const payload = (data): IJSonServerBookPayload => {
  let payloadDataWithNoNull = {};
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      payloadDataWithNoNull = {
        ...payloadDataWithNoNull,
        [key]: data[key],
      };
    }
  });
  return payloadDataWithNoNull;
};
export const createBook = async ({
  title,
  pages,
  tag,
}: IJsonServerBookCreatePayload): Promise<AxiosError | IJsonServerBook> => {
  const { data } = await axios.post(
    booksApi.create,
    {
      title,
      pages,
      tag,
    },
    requestConfig,
  );
  return data;
};

export const editBook = async ({
  id,
  title,
  pages,
  tag,
}: IJsonServerBookEditPayload): Promise<AxiosError | IJsonServerBook> => {
  const { data } = await axios.put(
    `${booksApi.edit}/${id}`,
    payload({ title, pages, tag }),
    requestConfig,
  );
  return data;
};

export const deleteBook = async ({
  id,
}: IJsonServerBookDeletePayload): Promise<AxiosError | IJsonServerBook> => {
  const { data } = await axios.delete(`${booksApi.delete}/${id}`, requestConfig);
  return data;
};

export const fetchBooks = async (): Promise<AxiosError | IJsonServerBook[]> => {
  let resp: IJsonServerBook[] = [];
  const { data } = await axios.get(booksApi.get, requestConfig);
  resp = data;
  return resp;
};
