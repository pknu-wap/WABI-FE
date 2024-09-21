import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #ffffff;
  position: relative;
    width: 20%;
  margin: 20px 16px;
  padding: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 30px;
`;

export const Form = styled.form``;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 22px;
  height: 24px;
`;

export const RequiredNote = styled.p`
  font-size: 15px;
  color: #4e54f5;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: #ff333e;
  position: absolute;
  bottom: 20px;
  left: 50px;
  margin: 0;
  padding: 0;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
