import React, {useState, useEffect} from 'react';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
import {useGetGroup} from 'queries/groupQueries/useGetGroup';
import {useCreateGroup} from 'queries/groupQueries/useCreateGroup';
import {useUpdateGroup} from 'queries/groupQueries/useUpdateGroup';
import {useDeleteGroup} from 'queries/groupQueries/useDeleteGroup';
import {useSetRecoilState} from 'recoil';
import {isFormVisibleState} from 'recoil/formState';

const CreateGroupForm = ({bandId}: {bandId?: number}) => {
  const setIsFormVisible = useSetRecoilState(isFormVisibleState);

  const {data: groupData} = useGetGroup(bandId || 0);
  const createGroupMutation = useCreateGroup();
  const updateGroupMutation = useUpdateGroup();
  const deleteGroupMutation = useDeleteGroup();

  const [groupFormData, setGroupFormData] = useState({
    bandName: '',
    bandMemo: '',
  });

  // 데이터 로드 후 상태 설정
  useEffect(() => {
    if (bandId && groupData) {
      const {bandName, bandMemo} = groupData.data;
      setGroupFormData({bandName, bandMemo});
    } else {
      setGroupFormData({bandName: '', bandMemo: ''});
    }
  }, [bandId, groupData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setGroupFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (bandId) {
      // 수정
      updateGroupMutation.mutate(
        {
          data: {...groupFormData, bandId},
        },
        {
          onSuccess: () => {
            alert('그룹이 성공적으로 수정되었습니다.');
          },
          onError: error => {
            alert('그룹 수정 중 오류가 발생했습니다.');
            console.error(error);
          },
        },
      );
    } else {
      // 생성
      createGroupMutation.mutate(
        {
          data: groupFormData,
        },
        {
          onSuccess: () => {
            alert('그룹이 성공적으로 생성되었습니다.');
          },
          onError: error => {
            alert('그룹 생성 중 오류가 발생했습니다.');
            console.error(error);
          },
        },
      );
    }
    setIsFormVisible(false);
  };

  const handleDelete = () => {
    if (!bandId) {
      alert('삭제할 그룹이 없습니다.');
      return;
    }

    deleteGroupMutation.mutate(
      {bandId},
      {
        onSuccess: () => {
          alert('그룹이 성공적으로 삭제되었습니다.');
        },
        onError: error => {
          alert('그룹 삭제 중 오류가 발생했습니다.');
          console.error(error);
        },
      },
    );
  };

  return (
    <CommonFormLayout
      title="그룹 정보"
      onSubmit={handleSave}
      onDelete={handleDelete}
    >
      <InputField
        name="bandName"
        label="그룹명"
        placeholder="그룹명 입력"
        required={true}
        value={groupFormData.bandName}
        onChange={handleChange}
      />
      <InputField
        name="bandMemo"
        label="메모"
        placeholder="그룹 메모 추가"
        required={false}
        value={groupFormData.bandMemo}
        onChange={handleChange}
      />
    </CommonFormLayout>
  );
};

export default CreateGroupForm;
