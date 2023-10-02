import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { iamApi, IAM_URL } from '@app/api/routes';
import { ISearchUsersIam } from '@app/types/searchUsersIam';

const fetchBasicAuth = () => ({
  username: process.env.IAM_BASIC_USERNAME,
  password: process.env.IAM_BASIC_PASSWORD,
});

const getRequestConfig: AxiosRequestConfig = {
  baseURL: IAM_URL,
  auth: {
    username: fetchBasicAuth().username,
    password: fetchBasicAuth().password,
  },
};

export const searchIamUser = async ({
  email,
}: ISearchUsersIam): Promise<AxiosResponse | AxiosError> => {
  let resp;
  try {
    const axiosResponse = await axios.get(iamApi.searchUsers, {
      params: {
        emails: email,
      },
      ...getRequestConfig,
    });
    resp = axiosResponse;
  } catch (error) {
    resp = error;
  }
  return resp;
};
