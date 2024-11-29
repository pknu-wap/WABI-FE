import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {fileUploadModalState} from 'recoil/modalState';
import {fileUpload} from 'api/fileUpload';
import ModalFrame from 'components/common/ModalFrame/ModalFrame';
import FileDragDrop from 'components/common/FileDragDrop/FileDragDrop';
import * as Styled from 'components/GroupDetail/FileUploadModal/FileUploadModal.styles';
import Button from 'components/common/Button/Button';

const FileUploadModal = ({groupId}: {groupId: number}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isModalOpen, setFileUploadModalState] =
    useRecoilState(fileUploadModalState);

  useEffect(() => {
    if (!isModalOpen) {
      setFile(null);
    }
  }, [isModalOpen]);

  const fileUploadClick = () => {
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    // Todo 파일 크기 검증

    const fileFormData = new FormData();
    fileFormData.append('file', file);

    fileUpload(groupId, fileFormData)
      .then(res => {
        console.log('파일 업로드 성공:', res);
        alert('파일 업로드 성공');
        setFile(null); // 파일 상태 초기화
        setFileUploadModalState(false); // 모달 닫기
      })
      .catch(err => {
        console.error('파일 업로드 실패:', err);
        alert('파일 업로드 실패');
      });
  };

  if (!isModalOpen) return null;

  return (
    <ModalFrame width={'500px'} height={'300px'}>
      <Styled.Wrapper>
        <Styled.InnerLayout>
          <Styled.Name>
            <h3>파일 업로드</h3>
          </Styled.Name>

          <FileDragDrop
            onFileSelect={setFile}
            acceptedFileTypes=".csv, .xlsx, .xls, text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />

          <Styled.ButtonWrapper>
            <Button
              onClick={fileUploadClick}
              width="106px"
              height="40px"
              fontColor="#4E54F5"
              buttonColor="white"
              borderRadius="10px"
              borderColor="#C1C7CD"
            >
              추가하기
            </Button>
          </Styled.ButtonWrapper>
        </Styled.InnerLayout>
      </Styled.Wrapper>
    </ModalFrame>
  );
};

export default FileUploadModal;
