import axios from 'axios';
import {logIn} from 'api/logIn';

const apiClient = axios.create({
  baseURL: 'https://zepelown.site/api',
});

apiClient.interceptors.request.use(
  async config => {
    let token = localStorage.getItem('token');

    if (!token) {
      console.log('No token found, logging in...');
      token = await logIn('seongwon3', 'shin091612@@');
      localStorage.setItem('token', token);
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await logIn('seongwon3', 'shin091612@@');
        localStorage.setItem('token', newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        // 이전 요청을 다시 시도
        return apiClient(originalRequest);
      } catch (loginError) {
        console.error('토큰 갱신에 실패했습니다', loginError);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
