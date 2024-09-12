import axios, {AxiosResponse} from 'axios';
import {studentQr} from '../types/QrType/StudentQr';

interface ServerResponse {
  message: string | null;
}

export const sendToServer = (
  data: studentQr,
): Promise<AxiosResponse<ServerResponse>> => {
  return axios
    .post('//34.47.97.81:8080/api/events/check-in', data)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};
