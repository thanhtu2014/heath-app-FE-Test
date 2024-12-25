import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ENV, ROUTES, StorageKey } from '@/constants';
import { getAuthUser, removeAuthUser } from './utils/localStorageUtil';

const http = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authUser = getAuthUser();
    if (authUser) {
      config.headers.set('Authorization', `Bearer ${authUser.access}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeAuthUser();
      window.location.href = ROUTES.LOGIN_PATH;
    }
    return Promise.reject(error);
  }
);

export default http; 