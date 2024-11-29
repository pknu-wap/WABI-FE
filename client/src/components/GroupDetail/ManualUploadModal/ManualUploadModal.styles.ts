import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 레이아웃 */
  gap: 20px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RequiredNote = styled.p`
  font-size: 15px;
  color: #4e54f5;
  margin: 0;
`;

export const SaveButtonWrapper = styled.div``;

export const Styled = {
  ModalContainer,
  ModalTitle,
  Form,
  InputGrid,
  FormFooter,
  SaveButtonWrapper,
};
