import React, {useState} from 'react';
import MemberUpdateButton from '../MemberUpdateButton/MemberUpdateButton';
import {fileUpload} from '../../../api/fileUpload';
import ModalFrame from '../../common/ModalFrame/ModalFrame';

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
      <h1>This is a FileUploadModal!</h1>
      <form>
        <input type="file" accept=".csv, .xlsx" onChange={fileChange} />
      </form>

      <MemberUpdateButton onClick={fileUploadClick} />
    </ModalFrame>
  );
};

export default FileUploadModal;
