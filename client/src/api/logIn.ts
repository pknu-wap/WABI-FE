import axios from 'axios';
import Cookies from 'js-cookie';

// 로그인 후 반환되는 데이터 형식 정의
interface LoginData {
  name: string;
  role: string;
  accessToken: string;
  refreshToken: string;
}

// 로그인 API 응답 형식 정의
interface RegisterResponse {
  data: LoginData;
}

// 환경변수에서 API URL 가져오기
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 토큰 가져오기 함수 추가
export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get('refreshToken');
};

// 토큰 설정 함수
export const setTokens = (
  newAccessToken: string,
  newRefreshToken: string,
): void => {
  // 액세스 토큰을 로컬 스토리지에 저장
  localStorage.setItem('accessToken', newAccessToken);

  // 리프레시 토큰을 쿠키에 저장
  Cookies.set('refreshToken', newRefreshToken, {
    secure: true, // 프로덕션 환경에서는 true로 설정 권장
    path: '/', // 모든 경로에서 쿠키 접근 가능
  });
};

// 토큰 초기화 함수
export const clearTokens = (): void => {
  // 로컬 스토리지에서 액세스 토큰 제거
  localStorage.removeItem('accessToken');
  // 쿠키에서 리프레시 토큰 제거
  Cookies.remove('refreshToken', {path: '/'});
};

// 로그인 함수
export const logIn = async (
  name: string,
  password: string,
): Promise<string> => {
  try {
    // 로그인 API 호출
    const response = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/auth/admins/login`, // 환경변수를 사용한 API URL
      {
        name: name,
        password: password,
      },
    );
    console.log(response.data);
    // 응답 데이터에서 액세스 및 리프레시 토큰 추출
    const {accessToken: newAccessToken, refreshToken} = response.data.data;

    // 토큰 저장
    setTokens(newAccessToken, refreshToken);

    console.log(newAccessToken);
    // 디버깅용 콘솔 출력
    console.log('Refresh Token:', Cookies.get('refreshToken'));
    console.log(response.data.data);
    // 액세스 토큰 반환
    return newAccessToken;
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error(
      'Login failed. Please check your credentials and try again.',
    );
  }
};
