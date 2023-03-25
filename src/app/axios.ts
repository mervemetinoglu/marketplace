import axios from 'axios';
import { env } from '@/constants/env';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const API_URL = env.NEXT_PUBLIC_API_URL;

const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export { apiInstance, type ApiResponse };
