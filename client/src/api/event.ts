import axios from 'axios';
import {CreateEventData, UpdateEventData, EventInfo} from 'types/eventTypes';

// 이벤트 생성
export const createEvent = (data: CreateEventData, adminId: number) => {
  return axios.post('https://zepelown.site/api/events', data, {
    params: {adminId: adminId},
  });
};

// 이벤트 수정
export const updateEvent = (data: UpdateEventData, adminId: number) => {
  return axios.put(`https://zepelown.site/api/events`, data, {
    params: {adminId: adminId},
  });
};

// 이벤트 단일 조회
interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const getEventById = async (
  eventId: number,
  adminId: number,
): Promise<ApiResponse<EventInfo>> => {
  const response = await axios.get<ApiResponse<EventInfo>>(
    `https://zepelown.site/api/events/${eventId}`,
    {
      params: {adminId: adminId},
    },
  );
  return response.data;
};

// 이벤트 삭제
export const deleteEvent = (eventId: number, adminId: number) => {
  return axios.delete(`https://zepelown.site/api/events/${eventId}`, {
    params: {eventId: eventId, adminId: adminId},
  });
};
