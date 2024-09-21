import React from 'react';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
const CreateGroupForm = () => {
  //Todo
  //차후 수정하기기능을 위해 데이터를 받아와서 띄우도록 추가 예정

  const handleSave = () => {
    //Todo
    //그룹 개설폼에서 저장하기 눌렀을때의 api 동작로직 추가
  };

  const handleDelete = () => {
    //Todo
    //그룹 개설폼에서 삭제하기 눌렀을때의 api 동작로직 추가
  };

  return (
    <CommonFormLayout
      title="그룹 정보"
      onSubmit={handleSave}
      onDelete={handleDelete}
    >
      <InputField label="그룹명" placeholder="그룹명" required={true} />
      <InputField label="메모" placeholder="그룹 메모 추가" required={false} />
    </CommonFormLayout>
  );
};

export default CreateGroupForm;
