/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const API_URL = process.env.API_URL;

const apiInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data.data;
  },
  (error: AxiosError) => {
    throw new Error(error.message);
  }
);

export { apiInstance, type ApiResponse };
