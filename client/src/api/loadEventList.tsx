import axios from 'axios';
import {CheckInInfo} from 'types/eventTypes';
import {logIn} from './logIn';

// 함수의 반환 타입을 Promise<CheckInInfo[]>로 명시
export const LoadEventList = async (token: string): Promise<CheckInInfo[]> => {
  try {
    const response = await axios.get(
      `https://zepelown.site/api/events/list?adminId=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

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
    if (error.response.status === 403) {
      console.log('403 에러 발생, 토큰이 만료되었습니다. 재로그인 시도 중...');

      try {
        const newToken = await logIn('seongwon3', 'shin091612@@');
        return LoadEventList(newToken);
      } catch (loginError) {
        console.log('로그인에 실패했습니다', loginError);
        // 재로그인 기능 추가예정
        return [];
      }
    } else {
      console.log('이벤트 리스트 불러오기에 실패했습니다', error);
      return [];
    }
  }
};
