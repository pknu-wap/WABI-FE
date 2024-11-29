import {AxiosResponse} from 'axios';
import {studentQr} from '../types/QrType/StudentQr';
import apiClient from 'api/apiClient';

interface ServerResponse {
  message: string | null;
}

export const sendToServer = (
  data: studentQr,
): Promise<AxiosResponse<ServerResponse>> => {
  return apiClient
    .post('https://zepelown.site/api/events/check-in', data, {})
    .then(res => {
      console.log(res.data.message);
      return res;
    })
    .catch(error => {
      console.log(error.response.data.message);
      throw error;
    });
};
