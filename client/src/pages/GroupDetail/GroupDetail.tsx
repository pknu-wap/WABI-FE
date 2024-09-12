import React from 'react';
import {useRecoilState} from 'recoil';
import {
  fileUploadModalState,
  manualUploadModalState,
} from '../../recoil/modalState';

import MemberUpdateButton from 'components/GroupDetail/MemberUpdateButton/MemberUpdateButton';
import Header from 'components/common/Header/Header';
import FileUploadModal from '../../components/GroupDetail/FileUploadModal/FileUploadModal';
import ManualUploadModal from '../../components/GroupDetail/ManualUploadModal/ManualUploadModal';
import GroupMemberList from "../../components/common/GroupMemberList/GroupMemberList";

// 파일 업로드 기능 컴포넌트

//Todo
//1. title, serchbox 컴포넌트 제작
//2. title, serchbox랑 button, GroupMemberList 맞춰 정렬하기
//3. group detail 페이지 css 마무리하기

const GroupDetailPage = () => {
  const [fileUploadModalStateValue, setFileUploadModalStateValue] =
    useRecoilState(fileUploadModalState);
  const [manualUploadModalStateValue, setManualUploadModalStateValue] =
    useRecoilState(manualUploadModalState);
  const openFileUploadModal = () => {
    setFileUploadModalStateValue(true);
  };

  const openManualUploadModal = () => {
    setManualUploadModalStateValue(true);
  };

  return (
    <div>
      <FileUploadModal modalStateValue={fileUploadModalStateValue} />
      <ManualUploadModal modalStateValue={manualUploadModalStateValue} />
      <Header />
      {/*<Title />*/}

      <div>
        {/*<SerchBox/>*/}
        <div>
          {/*Todo 자동추가 / 수동추가 버튼을 Button 컴포넌트 활용해서 나누기*/}
          <MemberUpdateButton onClick={openFileUploadModal} />
          <MemberUpdateButton onClick={openManualUploadModal} />
          {/*<ManualUpdateButton />*/}
        </div>
        <GroupMemberList />
      </div>
      {/*<FileUploadModal/>*/}
    </div>
  );
};

export default GroupDetailPage;
