import {CreateEventData, UpdateEventData, EventInfo} from 'types/eventTypes';
import apiClient from './apiClient';

// 이벤트 생성
export const createEvent = ({data}: {data: CreateEventData}) => {
  return apiClient.post('/events', data, {});
};

// 이벤트 수정
export const updateEvent = ({data}: {data: UpdateEventData}) => {
  return apiClient.put('/events', data, {});
};

// 이벤트 단일 조회
interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const getEventById = async ({
  eventId,
}: {
  eventId: number;
}): Promise<ApiResponse<EventInfo>> => {
  try {
    const response = await apiClient.get<ApiResponse<EventInfo>>(
      `/events/${eventId}`,
      {},
    );
    return response.data;
  } catch (error) {
    console.error('이벤트 데이터를 불러오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

// 이벤트 삭제
export const deleteEvent = ({eventId}: {eventId: number}) => {
  return apiClient.delete(`/events/${eventId}`, {});
};
