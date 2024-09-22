import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {
  fileUploadModalState,
  manualUploadModalState,
} from '../../recoil/modalState';

import * as Styled from './GroupDetail.styles';
import MemberUpdateButton from 'components/GroupDetail/MemberUpdateButton/MemberUpdateButton';
import Header from 'components/common/Header/Header';
import FileUploadModal from '../../components/GroupDetail/FileUploadModal/FileUploadModal';
import ManualUploadModal from '../../components/GroupDetail/ManualUploadModal/ManualUploadModal';
import GroupMemberList from '../../components/common/GroupMemberList/GroupMemberList';
import {useLocation} from 'react-router-dom';
import SearchBox from 'components/common/SearchBox/SearchBox';
import Title from "../../components/common/Title/Title";
import SearchAndButtonFrame from "../../components/common/SearchAndButtonFrame/SearchAndButtonFrame";

// 파일 업로드 기능 컴포넌트

//Todo
//가로스크롤 기능

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

  const [listFilterText, setListFilterText] = useState('');
  const location = useLocation();
  const groupId: string = location.state?.groupId || '1';


  return (
      <Styled.Wrapper>
          <Header/>
          <Styled.InnerLayout>
              <div>
                  <FileUploadModal modalStateValue={fileUploadModalStateValue}/>
                  <ManualUploadModal modalStateValue={manualUploadModalStateValue}/>
                  <Title titleText={'Group Name'} subTitleText={'그룹 메모'}/>
                  <SearchAndButtonFrame>
                      <SearchBox filterTextChange={setListFilterText}/>
                      <div>
                          {/*Todo 자동추가 / 수동추가 버튼을 Button 컴포넌트 활용해서 나누기*/}
                          <MemberUpdateButton onClick={openFileUploadModal} isFileUpload={true}/>
                          <MemberUpdateButton onClick={openManualUploadModal} isFileUpload={false}/>
                      </div>
                  </SearchAndButtonFrame>
                  <div>
                      <GroupMemberList groupId={groupId} filterText={listFilterText} />
                  </div>
              </div>
          </Styled.InnerLayout>
      </Styled.Wrapper>
  );
};

export default GroupDetailPage;
