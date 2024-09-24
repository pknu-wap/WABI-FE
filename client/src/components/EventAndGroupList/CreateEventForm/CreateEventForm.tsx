import React, {useEffect, useState} from 'react';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
import {Band} from 'types/groupTypes';
import {getEventById, createEvent, updateEvent, deleteEvent} from 'api/event';

const CreateEventForm = ({eventId}: {eventId?: number}) => {
  //Todo
  //1. adminId const 처리
  //2. 그룹 선택 추후 api 연결 이후 selectBox로 구현
  //3. 그룹 선택 배열로 파싱하는 로직 제거

  const adminId = 1; //추후 로그인 정보에 맞는 adminId로 적용해야함

  const [eventFormData, setEventFormData] = useState({
    eventName: '',
    startAt: '',
    endAt: '',
    eventStudentMaxCount: '',
    bandIds: '',
  });

  // 수정 모드일 경우 기존 데이터 불러오기
  useEffect(() => {
    if (eventId) {
      getEventById(eventId, adminId).then(response => {
        const {eventName, startAt, endAt, eventStudentMaxCount, bands} =
          response.data;

        const bandIds = bands.map((band: Band) => band.bandId).join(', '); // 배열을 문자열로 변환

        setEventFormData({
          eventName,
          startAt,
          endAt,
          eventStudentMaxCount: String(eventStudentMaxCount),
          bandIds,
        });
      });
    } else {
      setEventFormData({
        eventName: '',
        startAt: '',
        endAt: '',
        eventStudentMaxCount: '',
        bandIds: '',
      });
    }
  }, [eventId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setEventFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const {eventName, startAt, endAt, eventStudentMaxCount, bandIds} =
      eventFormData;
    const requestPayload = {
      eventName,
      startAt,
      endAt,
      eventStudentMaxCount: parseInt(eventStudentMaxCount, 10),
    };

    if (eventId) {
      // 이벤트 수정 로직 (PUT 요청)
      updateEvent(
        {
          ...requestPayload,
          eventId: eventId,
        },
        adminId,
      );
      alert('이벤트 정보가 성공적으로 수정되었습니다.');
    } else {
      // 그룹 생성 로직 (POST 요청)
      const bandIdArray = bandIds
        .split(',')
        .map(id => id.trim())
        .filter(id => id !== '')
        .map(id => parseInt(id, 10));
      createEvent(
        {
          ...requestPayload,
          bandIds: bandIdArray,
        },
        adminId,
      );
      alert('이벤트가 성공적으로 생성되었습니다.');
    }
  };

  const handleDelete = () => {
    if (eventId) {
      deleteEvent(eventId, adminId);
      alert('이벤트가 성공적으로 삭제되었습니다.');
    } else {
      alert('삭제할 이벤트가 없습니다');
    }
    //추후 리다이렉트 또는 상태 초기화로 처리해야할 듯
  };

  return (
    <CommonFormLayout
      title="이벤트 정보"
      onSubmit={handleSave}
      onDelete={handleDelete}
    >
      <InputField
        name="eventName"
        label="이벤트 제목"
        placeholder="이벤트 제목 입력"
        required={true}
        value={eventFormData.eventName}
        onChange={handleChange}
      />
      <InputField
        name="startAt"
        label="이벤트 시작"
        required={true}
        type="datetime-local"
        value={eventFormData.startAt}
        onChange={handleChange}
      />
      <InputField
        name="endAt"
        label="이벤트 종료"
        required={true}
        type="datetime-local"
        value={eventFormData.endAt}
        onChange={handleChange}
      />
      <InputField
        name="eventStudentMaxCount"
        label="참여 수 제한 (명)"
        placeholder="참여 제한 수 입력"
        required={false}
        type="number"
        value={eventFormData.eventStudentMaxCount}
        onChange={handleChange}
      />
      <InputField
        name="bandIds"
        label="참여 그룹 선택"
        placeholder=",을 활용해서 입력 (1, 3, 5)"
        required={false}
        value={eventFormData.bandIds}
        onChange={handleChange}
        readOnly={!!eventId} // 수정 모드일 때 readOnly 적용
      />
    </CommonFormLayout>
  );
};

export default CreateEventForm;
