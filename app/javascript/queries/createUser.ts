import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ICreateUserTypiCodePayload } from '@app/types/UserTypiCode';
import { usersApi, DEFAULT_JSON_SERVER_ENDPOINT } from '@app/api/routes';

const postRequestConfig: AxiosRequestConfig = {
  baseURL: DEFAULT_JSON_SERVER_ENDPOINT,
  xsrfHeaderName: 'X-CSRF-TOKEN',
  headers: {
    'X-CSRF-TOKEN': 'axdfefdfhhaoiufj',
    'Content-Type': 'application/json',
  },
};

export const createUser = async ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}: ICreateUserTypiCodePayload): Promise<AxiosError | AxiosResponse> => {
  let resp = null;
  try {
    const axiosResponse = await axios.post(
      usersApi.create,
      { name, username, email, address, phone, website, company },
      postRequestConfig,
    );
    resp = axiosResponse;
  } catch (error) {
    resp = error;
  }
  return resp;
};
