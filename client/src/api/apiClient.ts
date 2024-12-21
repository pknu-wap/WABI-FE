import axios from 'axios';
import Cookies from 'js-cookie';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

// Axios 클라이언트 생성
const apiClient = axios.create({
  baseURL: apiBaseUrl, // 기본 API URL 설정
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  async config => {
    // 로컬 스토리지에서 액세스 토큰 가져오기
    const token = localStorage.getItem('accessToken');

    if (token) {
      // Authorization 헤더에 액세스 토큰 추가
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 쿠키에서 리프레시 토큰 가져오기
    const refreshToken = Cookies.get('refreshToken');
    if (refreshToken) {
      // Refresh-Token 헤더에 리프레시 토큰 추가
      config.headers['Refresh-Token'] = refreshToken;
    }

    return config;
  },
  error => Promise.reject(error),
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  response => response, // 응답 데이터 그대로 반환
  async error => {
    const originalRequest = error.config; // 원본 요청 정보 저장

    // 액세스 토큰이 만료된 경우 처리
    if (
      error.response &&
      error.response.status === 403 && // 403 Forbidden 상태 코드 확인
      !originalRequest._retry // 재시도를 방지하기 위한 플래그 확인
    ) {
      originalRequest._retry = true; // 재시도 플래그 설정

      try {
        // 쿠키에서 리프레시 토큰 가져오기
        const refreshToken = Cookies.get('refreshToken');

        if (!refreshToken) {
          throw new Error('리프레시 토큰이 없습니다. 다시 로그인하세요.');
        }

        // 응답 데이터에서 새로운 액세스 토큰 확인
        const newAccessToken = error.response.data?.newAccessToken;

        if (newAccessToken) {
          // 로컬 스토리지에 새로운 액세스 토큰 저장
          localStorage.setItem('accessToken', newAccessToken);
          // 원본 요청의 Authorization 헤더 업데이트
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // 새로운 액세스 토큰으로 원본 요청 재시도
          return apiClient(originalRequest);
        } else {
          console.warn('응답에 새로운 액세스 토큰이 없습니다.');
        }
      } catch (refreshError) {
        // 토큰 갱신 실패 시 처리
        console.error('토큰 갱신 실패:', refreshError);
        // 사용자 로그아웃 및 로그인 페이지로 리다이렉트
        localStorage.removeItem('accessToken');
        Cookies.remove('refreshToken');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error); // 오류 반환
  },
);

export default apiClient;
