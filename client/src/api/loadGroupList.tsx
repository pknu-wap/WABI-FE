import {Band} from 'types/groupTypes';
import apiClient from 'api/apiClient';

export const LoadGroupList = async (): Promise<Band[]> => {
  try {
    const response = await apiClient.get('/bands/list?adminId=1');

    const groups = response.data.data;

    const filteredEvent = groups.map((group: Band) => ({
      bandId: group.bandId,
      bandName: group.bandName,
    }));

    return filteredEvent;
  } catch (error) {
    console.error('그룹 리스트 불러오기에 실패했습니다:', error);
    return [];
  }
};
