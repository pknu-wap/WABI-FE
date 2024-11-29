import React, {useState, useRef} from 'react';
import * as Styled from './FileDragDrop.styles';
import {FiX, FiUpload} from 'react-icons/fi';

interface FileDragDropProps {
  onFileSelect: (file: File | null) => void; // 파일 선택 시 부모에 알림
  acceptedFileTypes: string;
}

const FileDragDrop: React.FC<FileDragDropProps> = ({
  onFileSelect,
  acceptedFileTypes,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFileType = (file: File): boolean => {
    const acceptedTypes = acceptedFileTypes
      .split(',')
      .map(type => type.trim().toLowerCase());
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    const mimeType = file.type.toLowerCase();

    // 확장자 또는 MIME 타입이 허용 목록에 포함되어 있는지 확인
    return (
      acceptedTypes.includes(fileExtension) || acceptedTypes.includes(mimeType)
    );
  };

  const processFile = (selectedFile: File) => {
    if (!validateFileType(selectedFile)) {
      alert('허용되지 않는 파일 형식입니다.');
      return;
    }

    setFile(selectedFile);
    onFileSelect(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleZoneClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Styled.FileDropZone
      onClick={handleZoneClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      dragOver={dragOver}
    >
      {file ? (
        <Styled.FilePreview>
          <p>{file.name}</p>
          <Styled.IconButton onClick={handleFileRemove}>
            <FiX size={20} color="#ff4d4f" />
          </Styled.IconButton>
        </Styled.FilePreview>
      ) : (
        <Styled.MessageContainer>
          <FiUpload size={24} color="#4E54F5" />
          <p>
            {dragOver
              ? '파일을 여기에 놓으세요!'
              : '파일을 드래그 앤 드랍 또는 클릭하세요.'}
          </p>
        </Styled.MessageContainer>
      )}
      <input
        type="file"
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{display: 'none'}}
      />
    </Styled.FileDropZone>
  );
};

export default FileDragDrop;
