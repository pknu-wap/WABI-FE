import styled from 'styled-components';
import Logo from '../Logo/Logo';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
`;

export const ModalExitButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

    &:hover {
        color: red;
    }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalLogo = styled(Logo)`
  margin-right: 10px;
`;

export const ModalContent = styled.div`
  padding: 10px 0;
  text-align: center;
`;
