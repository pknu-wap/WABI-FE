import React from 'react';
import {useRecoilState} from 'recoil';
import {
  fileUploadModalState,
  manualUploadModalState,
} from '../../recoil/modalState';

import MemberUpdateButton from 'components/group_detail/MemberUpdateButton/MemberUpdateButton';
import Header from 'components/common/Header/Header';
import FileUploadModal from '../../components/group_detail/FileUploadModal/FileUploadModal';
import ManualUploadModal from '../../components/group_detail/ManualUploadModal/ManualUploadModal';
import GroupMemberList from "../../components/common/GroupMemberList/GroupMemberList";

// 파일 업로드 기능 컴포넌트

//Todo
//1. ModalFrame 만들기
//2. ModalFrame 활용해서 수동추가, 자동추가 모달 완성하기
//3. Group Name 부분 만들기
//4. 검색 박스 컴포넌트 + 인원 자동/수동 추가 부분 하나의 컴포넌트로 만들기
//5. GroupMemberList 부분 컴포넌트 만들기
//6. 3~5 하나로 묶기.

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
