import React, {useEffect, useState} from 'react';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
import {createGroup, updateGroup, getGroupById, deleteGroup} from 'api/group';

const CreateGroupForm = ({bandId}: {bandId?: number}) => {
  const adminId = 1;

  const [groupFormData, setGroupFormData] = useState({
    bandName: '',
    bandMemo: '',
  });

  useEffect(() => {
    if (bandId) {
      getGroupById(bandId, adminId).then(response => {
        const {bandName, bandMemo} = response.data;
        console.log(response.data);
        setGroupFormData({bandName, bandMemo});
      });
    }
  }, [bandId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setGroupFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (bandId) {
      // 그룹 수정 로직 (PUT 요청)
      updateGroup({...groupFormData, bandId: bandId}, adminId);
      alert('그룹 정보가 성공적으로 수정되었습니다.');
    } else {
      // 그룹 생정 로직 (POST 요청)
      createGroup(groupFormData, adminId);
      alert('그룹이 성공적으로 생성되었습니다.');
    }
  };

  const handleDelete = () => {
    if (bandId) {
      deleteGroup(bandId, adminId);
      alert('그룹 성공적으로 삭제되었습니다.');
    } else {
      alert('삭제할 그룹이 없습니다');
    }
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
        placeholder="그룹명"
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
