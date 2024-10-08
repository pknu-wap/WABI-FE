import React, {useState} from 'react';
//import MemberUpdateButton from '../MemberUpdateButton/MemberUpdateButton';
import {fileUpload} from '../../../api/fileUpload';
import ModalFrame from '../../common/ModalFrame/ModalFrame';
import * as Styled from './FileUploadModal.styles';
import Button from '../../common/Button/Button';
interface FileUploadModalProps {
  modalStateValue: boolean;
  groupId: number;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({
  modalStateValue,
  groupId,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const fileChange = (fileElement: React.ChangeEvent<HTMLInputElement>) => {
    const files = fileElement.target.files;
    if (files) setFile(files[0]);
  };

  const fileUploadClick = () => {
    const fileToUpload = file || new Blob();
    const fileFormData = new FormData();
    fileFormData.append('file', fileToUpload);
    console.log(fileFormData);

    fileUpload(groupId, fileFormData)
      .then(res => {
        console.log('파일 업로드 성공:', res);
      })
      .catch(err => {
        console.error('파일 업로드 실패:', err);
      });
  };

  if (modalStateValue === false) return null;

  return (
    <ModalFrame>
      <Styled.Wrapper>
        <Styled.InnerLayout>
          <Styled.Name>
            <h3>파일 불러오기</h3>
          </Styled.Name>
          <Styled.FileInputContainer>
            <Styled.FileInputLabel>
              파일 선택
              <input type="file" accept=".csv, .xlsx" onChange={fileChange} />
            </Styled.FileInputLabel>
          </Styled.FileInputContainer>
          {/*<MemberUpdateButton onClick={fileUploadClick} isFileUpload={true} />*/}
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
