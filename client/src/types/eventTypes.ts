import {Band} from './groupTypes';

// 공통 필드를 가진 BaseEventData 인터페이스 정의
export interface BaseEventData {
  eventName: string;
  eventStudentMaxCount: number;
  startAt: string;
  endAt: string;
}

// Event 정보에 사용하는 인터페이스
export interface EventInfo extends BaseEventData {
  eventId: number;
  bands: Band[];
}

// 이벤트 생성 데이터에 사용하는 인터페이스
export interface CreateEventData extends BaseEventData {
  bandIds: number[];
}

// 이벤트 수정 데이터에 사용하는 인터페이스
export interface UpdateEventData extends BaseEventData {
  eventId: number;
}
