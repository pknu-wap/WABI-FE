import {CreateEventData, UpdateEventData, EventInfo} from 'types/eventTypes';
import apiClient from './apiClient';

// 이벤트 생성
export const createEvent = (data: CreateEventData, adminId: number) => {
  return apiClient.post('/events', data, {
    params: {adminId: adminId},
  });
};

// 이벤트 수정
export const updateEvent = (data: UpdateEventData, adminId: number) => {
  return apiClient.put('/events', data, {
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
  try {
    const response = await apiClient.get<ApiResponse<EventInfo>>(
      `/events/${eventId}`,
      {
        params: {
          adminId: adminId,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('이벤트 데이터를 불러오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

// 이벤트 삭제
export const deleteEvent = (eventId: number, adminId: number) => {
  return apiClient.delete(`/events/${eventId}`, {
    params: {adminId: adminId},
  });
};
