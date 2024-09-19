import React from 'react';
import {useRecoilState} from 'recoil';
import {fileUploadModalState, manualUploadModalState} from 'recoil/modalState';

import {
  ModalBackdrop,
  ModalContent,
  ModalExitButton,
  ModalHeader,
  ModalLogo,
  ModalView,
} from './ModalFrame.styles';
import icon from '../../../icon.png';

//인원 자동추가를 누르면 modalframe의 상태를 true로 만들어줘야한다.

const ModalFrame: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [, setFileUploadModalState] = useRecoilState(fileUploadModalState);
  const [, setManualUploadModalState] = useRecoilState(manualUploadModalState);

  // TODO: 모달 상태 관리에 대한 리팩토링 필요 😒
  const modalClose = () => {
    setFileUploadModalState(false);
    setManualUploadModalState(false);
  };

  return (
    <ModalBackdrop>
      <ModalView>
        <ModalHeader>
          <ModalExitButton onClick={modalClose}>X</ModalExitButton>
          <ModalLogo src={icon} alt={'logo1'} text={'WABI'} width={'40px'} height={'40px'}/>
        </ModalHeader>

        <ModalContent>{children}</ModalContent>
      </ModalView>
    </ModalBackdrop>
  );
};

export default ModalFrame;
