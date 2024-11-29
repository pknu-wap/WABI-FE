import apiClient from 'api/apiClient';

export const loadCheckInList = (eventId: number) => {
  return apiClient
    .get(`/events/check-in/${eventId}?filter=ALL`)
    .then(res => res.data.data)
    .catch(error => {
      console.error('체크인 명단 불러오기 실패:', error);
      throw error;
    });
};
