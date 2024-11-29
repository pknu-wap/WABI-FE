import React from 'react';
import {useRecoilState} from 'recoil';
import {fileUploadModalState, manualUploadModalState} from 'recoil/modalState';
import {FiX} from 'react-icons/fi';
import {
  ModalBackdrop,
  ModalContent,
  ModalExitButton,
  ModalHeader,
  ModalLogo,
  ModalView,
} from './ModalFrame.styles';

//인원 자동추가를 누르면 modalframe의 상태를 true로 만들어줘야한다.

const ModalFrame: React.FC<{
  children: React.ReactNode;
  width?: string; // 모달의 너비
  height?: string; // 모달의 높이
}> = ({children, width = '500px', height = '400px'}) => {
  // 기본값 설정
  const [, setFileUploadModalState] = useRecoilState(fileUploadModalState);
  const [, setManualUploadModalState] = useRecoilState(manualUploadModalState);

  // TODO: 모달 상태 관리에 대한 리팩토링 필요 😒
  const modalClose = () => {
    setFileUploadModalState(false);
    setManualUploadModalState(false);
  };
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // ModalContent 클릭 시 이벤트 전파 방지
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalView style={{width, height}}>
        <ModalHeader>
          <ModalExitButton onClick={modalClose}>
            <FiX size={24} />
          </ModalExitButton>
          <ModalLogo
            src={'images/wabi.png'}
            alt={'logo1'}
            text={'WABI'}
            width={'40px'}
            height={'40px'}
          />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalView>
    </ModalBackdrop>
  );
};

export default ModalFrame;
