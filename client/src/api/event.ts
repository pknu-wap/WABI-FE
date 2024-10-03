import axios from 'axios';
import {CreateEventData, UpdateEventData, EventInfo} from 'types/eventTypes';
import {logIn} from './logIn';

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
  token: string | null,
): Promise<ApiResponse<EventInfo>> => {
  try {
    if (!token) {
      token = localStorage.getItem('token');
    }

    if (!token) {
      console.log('토큰이 없습니다. 로그인 시도 중...');
      token = await logIn('seongwon3', 'shin091612@@');
      localStorage.setItem('token', token);
    }

    const response = await axios.get<ApiResponse<EventInfo>>(
      `https://zepelown.site/api/events/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          adminId: adminId,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('이벤트 데이터를 불러오는 중 오류가 발생했습니다:', error);
    try {
      console.log('토큰이 만료되었습니다. 다시 로그인 시도 중...');
      const newToken = await logIn('seongwon3', 'shin091612@@');
      localStorage.setItem('token', newToken);
      return await getEventById(eventId, adminId, newToken);
    } catch (loginError) {
      console.error('재로그인 실패:', loginError);
      throw loginError;
    }
  }
};

// 이벤트 삭제
export const deleteEvent = (eventId: number, adminId: number) => {
  return axios.delete(`https://zepelown.site/api/events/${eventId}`, {
    params: {eventId: eventId, adminId: adminId},
  });
};
