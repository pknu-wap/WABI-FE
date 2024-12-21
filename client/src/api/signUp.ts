import axios, {AxiosResponse} from 'axios';

// 환경변수에서 API URL 가져오기
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 회원가입 함수
export const signUp = (
  name: string,
  password: string,
  email: string,
): Promise<AxiosResponse | null> => {
  return axios
    .post(`${API_BASE_URL}/auth/admins/register`, {
      name: name,
      password: password,
      email: email,
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.error('Failed to register admin:', error);
      return null;
    });
};
