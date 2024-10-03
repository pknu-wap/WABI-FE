import axios from 'axios';
import {CheckInInfo} from 'types/eventTypes';

export const LoadEventList = (token: string) => {
  return axios
    .get(`https://zepelown.site/api/events/list?adminId=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      const events = res.data.data;

      return events.map((event: CheckInInfo) => ({
        eventId: event.eventId,
        eventName: event.eventName,
        eventStudentMaxCount: event.eventStudentMaxCount,
        startAt: event.startAt.slice(0, 10) + ' ' + event.startAt.slice(11, 16),
        endAt: event.endAt.slice(0, 10) + ' ' + event.endAt.slice(11, 16),
        bands: event.bands,
        checkIn: event.checkInStatusCount.checkIn,
        notCheckIn: event.checkInStatusCount.notCheckIn,
      }));
    })
    .catch(error => {
      console.log('이벤트 리스트 불러오기에 실패했습니다', error);
      return [];
    });
};
