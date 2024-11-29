import axios from 'axios';

interface LoginData {
  name: string;
  role: string;
  token: string;
}

interface RegisterResponse {
  data: LoginData;
}

export const logIn = (name: string, password: string): Promise<string> => {
  return axios
    .post<RegisterResponse>('https://zepelown.site/auth/admins/login', {
      name: name,
      password: password,
    })
    .then(res => {
      return res.data.data.token;
    })
    .catch(error => {
      console.error('Failed to login admin:', error);
      throw error;
    });
};
