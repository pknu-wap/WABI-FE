import React, {useState, useEffect} from 'react';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
import {Band} from 'types/groupTypes';
import {useCreateEvent} from 'queries/eventQueries/useCreateEvent';
import {useDeleteEvent} from 'queries/eventQueries/useDeleteEvent';
import {useGetEvent} from 'queries/eventQueries/useGetEvent';
import {useUpdateEvent} from 'queries/eventQueries/useUpdateEvent';
import {useSetRecoilState} from 'recoil';
import {isFormVisibleState} from 'recoil/formState';

const CreateEventForm = ({eventId}: {eventId?: number}) => {
  const adminId = 1; // 추후 로그인 정보 기반으로 설정

  const {data: eventData} = useGetEvent(eventId || 0, adminId);
  const createEventMutation = useCreateEvent();
  const updateEventMutation = useUpdateEvent();
  const deleteEventMutation = useDeleteEvent();

  const [eventFormData, setEventFormData] = useState({
    eventName: '',
    startAt: '',
    endAt: '',
    eventStudentMaxCount: '',
    bandIds: '',
  });
  const setIsFormVisible = useSetRecoilState(isFormVisibleState);

  // 데이터 로드 후 상태 설정
  useEffect(() => {
    if (eventId && eventData) {
      const {eventName, startAt, endAt, eventStudentMaxCount, bands} =
        eventData.data;

      const bandIds = bands.map((band: Band) => band.bandId).join(', ');

      setEventFormData({
        eventName,
        startAt,
        endAt,
        eventStudentMaxCount: String(eventStudentMaxCount),
        bandIds,
      });
    }
  }, [eventId, eventData]);

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

    const bandIdArray = bandIds
      .split(',')
      .map(id => id.trim())
      .filter(id => id !== '')
      .map(id => parseInt(id, 10));

    if (eventId) {
      // 수정
      updateEventMutation.mutate(
        {
          data: {...requestPayload, eventId},
          adminId,
        },
        {
          onSuccess: () => {
            alert('이벤트가 성공적으로 수정되었습니다.');
          },
          onError: error => {
            alert('이벤트 수정 중 오류가 발생했습니다.');
            console.error(error);
          },
        },
      );
    } else {
      // 생성
      createEventMutation.mutate(
        {
          data: {...requestPayload, bandIds: bandIdArray},
          adminId,
        },
        {
          onSuccess: () => {
            alert('이벤트가 성공적으로 생성되었습니다.');
          },
          onError: error => {
            alert('이벤트 생성 중 오류가 발생했습니다.');
            console.error(error);
          },
        },
      );
    }
    setIsFormVisible(false);
  };

  const handleDelete = () => {
    if (!eventId) {
      alert('삭제할 이벤트가 없습니다.');
      return;
    }

    deleteEventMutation.mutate(
      {eventId, adminId},
      {
        onSuccess: () => {
          alert('이벤트가 성공적으로 삭제되었습니다.');
        },
        onError: error => {
          alert('이벤트 삭제 중 오류가 발생했습니다.');
          console.error(error);
        },
      },
    );
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
