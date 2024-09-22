import React, {useState} from 'react';
//import MemberUpdateButton from '../MemberUpdateButton/MemberUpdateButton';
import {fileUpload} from '../../../api/fileUpload';
import ModalFrame from '../../common/ModalFrame/ModalFrame';
import * as Styled from './FileUploadModal.styles';
import Button from "../../common/Button/Button";


interface FileUploadModalProps {
  modalStateValue: boolean;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({modalStateValue}) => {
  const [file, setFile] = useState<File | null>(null);

  const fileChange = (fileElement: React.ChangeEvent<HTMLInputElement>) => {
    const files = fileElement.target.files;
    if (files) setFile(files[0]);
  };

  const fileUploadClick = () => {
    const fileToUpload = file || new Blob();
    const fileFormData = new FormData();
    fileFormData.append('file', fileToUpload);
    fileUpload(fileFormData);
  };

  if (modalStateValue === false) return null;

  return (
    <ModalFrame>
      <Styled.Wrapper>
        <Styled.InnerLayout>
          <Styled.Name>
            <h2>파일 불러오기</h2>
          </Styled.Name>
          <Styled.Container>
            <form>
              <input type="file" accept=".csv, .xlsx" onChange={fileChange}/>
            </form>
          </Styled.Container>
          {/*<MemberUpdateButton onClick={fileUploadClick} isFileUpload={true} />*/}
          <Button
                onClick={fileUploadClick}
                width="106px"
                height="40px"
                fontColor="#4E54F5"
                buttonColor="white"
                borderRadius="10px"
                borderColor="#C1C7CD">
              추가하기
            </Button>
        </Styled.InnerLayout>
      </Styled.Wrapper>
    </ModalFrame>
  );
};

export default FileUploadModal;
