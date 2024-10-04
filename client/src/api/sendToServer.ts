import axios, {AxiosResponse} from 'axios';
import {studentQr} from '../types/QrType/StudentQr';

interface ServerResponse {
  message: string | null;
}

export const sendToServer = (
  data: studentQr,
  token: string | null,
): Promise<AxiosResponse<ServerResponse>> => {
  return axios
    .post('https://zepelown.site/api/events/check-in', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};
