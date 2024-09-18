import React from 'react';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import InputField from 'components/common/InputField/InputField';
const CreateEventForm = () => {
  //Todo
  //차후 수정하기기능을 위해 데이터를 받아와서 띄우도록 추가 예정

  const handleSave = () => {
    //Todo
    //이벤트 개설폼에서 저장하기 눌렀을때의 api 동작로직 추가
  };

  const handleDelete = () => {
    //Todo
    //이벤트 개설폼에서 삭제하기 눌렀을때의 api 동작로직 추가
  };

  return (
    <CommonFormLayout
      title="이벤트 정보"
      onSubmit={handleSave}
      onDelete={handleDelete}
    >
      <InputField
        label={'이벤트 제목'}
        placeholder={'이벤트 제목'}
        required={true}
      />
      <InputField
        label={'이벤트 시작'}
        placeholder={'이벤트 시작'}
        required={true}
      />
      <InputField
        label={'이벤트 종료'}
        placeholder={'이벤트 종료'}
        required={true}
      />
      {/*Todo 이벤트 개설에 필요한 Input 요소들 추가 예정 및 input type에 맞는 css 적용예정*/}
    </CommonFormLayout>
  );
};

export default CreateEventForm;
