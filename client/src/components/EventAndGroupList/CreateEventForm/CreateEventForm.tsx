import React, {useState, useEffect} from 'react';
import Select, {MultiValue} from 'react-select';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
import {Band} from 'types/groupTypes';
import {useCreateEvent} from 'queries/eventQueries/useCreateEvent';
import {useDeleteEvent} from 'queries/eventQueries/useDeleteEvent';
import {useGetEvent} from 'queries/eventQueries/useGetEvent';
import {useUpdateEvent} from 'queries/eventQueries/useUpdateEvent';
import {useSetRecoilState} from 'recoil';
import {isFormVisibleState} from 'recoil/formState';
import {useGetGroupList} from 'queries/groupQueries/useGetGroupList'; // 그룹 리스트를 가져오는 커스텀 훅
import styled from 'styled-components';

type SelectOption = {value: number; label: string};
const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CreateEventForm = ({eventId}: {eventId?: number}) => {
  const {data: eventData} = useGetEvent(eventId || 0);
  const createEventMutation = useCreateEvent();
  const updateEventMutation = useUpdateEvent();
  const deleteEventMutation = useDeleteEvent();
  const {data: groupListData, isLoading: isGroupListLoading} =
    useGetGroupList();

  const [eventFormData, setEventFormData] = useState({
    eventName: '',
    startAt: '',
    endAt: '',
    eventStudentMaxCount: '',
    bandIds: [] as SelectOption[],
  });
  const setIsFormVisible = useSetRecoilState(isFormVisibleState);

  // 데이터 로드 후 상태 설정
  useEffect(() => {
    if (eventId && eventData?.data) {
      const {eventName, startAt, endAt, eventStudentMaxCount, bands} =
        eventData.data;

      const bandIds = bands.map((band: Band) => ({
        value: band.bandId,
        label: band.bandName,
      }));

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

  const handleBandChange = (selectedOptions: MultiValue<SelectOption>) => {
    setEventFormData(prevData => ({
      ...prevData,
      bandIds: Array.from(selectedOptions),
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
      bandIds: bandIds.map((band: SelectOption) => band.value),
    };

    if (eventId) {
      updateEventMutation.mutate(
        {data: {...requestPayload, eventId}},
        {
          onSuccess: () => alert('이벤트가 성공적으로 수정되었습니다.'),
          onError: error => console.error('이벤트 수정 중 오류:', error),
        },
      );
    } else {
      createEventMutation.mutate(
        {data: requestPayload},
        {
          onSuccess: () => alert('이벤트가 성공적으로 생성되었습니다.'),
          onError: error => console.error('이벤트 생성 중 오류:', error),
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
      {eventId},
      {
        onSuccess: () => alert('이벤트가 성공적으로 삭제되었습니다.'),
        onError: error => console.error('이벤트 삭제 중 오류:', error),
      },
    );
  };

  const groupOptions =
    groupListData?.map((group: Band) => ({
      value: group.bandId,
      label: group.bandName,
    })) || [];

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
      <div className="form-group">
        <Label htmlFor="bandIds">참여 그룹 선택</Label>
        <Select
          id="bandIds"
          isMulti
          options={groupOptions}
          isLoading={isGroupListLoading}
          value={eventFormData.bandIds}
          onChange={handleBandChange}
          placeholder="그룹을 선택하세요"
        />
      </div>
    </CommonFormLayout>
  );
};

export default CreateEventForm;
