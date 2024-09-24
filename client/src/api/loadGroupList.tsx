import axios from 'axios';
import {Band} from 'types/groupTypes';

export const LoadGroupList = () => {
  return axios
    .get(`https://zepelown.site/api/bands/list?adminId=1`)
    .then(res => {
      const groups = res.data.data;
      const filteredEvent = groups.map((group: Band) => ({
        bandId: group.bandId,
        bandName: group.bandName,
      }));

      return filteredEvent;
    })
    .catch(error => {
      console.log('이벤트 리스트 불러오기에 실패했습니다', error);
      return [];
    });
};
