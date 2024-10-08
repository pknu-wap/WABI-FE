import {CheckInInfo} from 'types/eventTypes';
import apiClient from './apiClient';

export const LoadEventList = async (): Promise<CheckInInfo[]> => {
  try {
    const response = await apiClient.get('/events/list', {
      params: {adminId: 1},
    });

    const events = response.data.data;

    return events.map((event: CheckInInfo) => ({
      eventId: event.eventId,
      eventName: event.eventName,
      eventStudentMaxCount: event.eventStudentMaxCount,
      startAt: `${event.startAt.slice(0, 10)} ${event.startAt.slice(11, 16)}`,
      endAt: `${event.endAt.slice(0, 10)} ${event.endAt.slice(11, 16)}`,
      bands: event.bands,
      checkIn: event.checkInStatusCount.checkIn,
      notCheckIn: event.checkInStatusCount.notCheckIn,
    }));
  } catch (error: any) {
    console.error('이벤트 리스트 불러오기에 실패했습니다:', error);
    return [];
  }
};
