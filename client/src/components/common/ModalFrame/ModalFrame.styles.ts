import styled from 'styled-components';
import Logo from '../Logo/Logo';
export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.button`
  width: 500px;
  height: 400px;
  background-color: white;
  border: none;
  opacity: 1;
`;

export const ModalExitButton = styled.button`
  position: absolute;
  right: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  width: 490px;
  height: 120px;
  position: relative;
  bottom: 70px;
`;

export const ModalLogo = styled(Logo)`
  position: absolute;
  left: 30px;
  bottom: 10px;
`;

export const ModalContent = styled.div``;
