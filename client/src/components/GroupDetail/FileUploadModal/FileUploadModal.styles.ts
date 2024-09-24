import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.div`
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileInputContainer = styled.div`
  width: 360px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f8;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const FileInputLabel = styled.label`
  input[type='file'] {
    display: none;
  }
  display: inline-block;
  background-color: #4e54f5;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
