import axios, {AxiosResponse} from 'axios';

export const signUp = (
  name: string,
  password: string,
  email: string,
): Promise<AxiosResponse | null> => {
  return axios
    .post('https://zepelown.site/auth/admins/register', {
      name: name,
      password: password,
      email: email,
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log('Failed to register admin:', error);
      return null;
    });
};
