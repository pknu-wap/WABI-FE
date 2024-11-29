import styled from 'styled-components';

export const FileDropZone = styled.div<{dragOver: boolean}>`
  border: 2px dashed ${props => (props.dragOver ? '#4E54F5' : '#C1C7CD')};
  padding: 20px;
  width: 360px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => (props.dragOver ? '#f0f4ff' : 'white')};
  transition:
    background-color 0.3s,
    border-color 0.3s;
  cursor: pointer;

  p {
    margin: 0;
    color: #7a7a7a;
    font-size: 14px;
  }
`;

export const FilePreview = styled.div`
  padding: 10px;
  border: 1px solid #c1c7cd;
  border-radius: 5px;
  background-color: #f9f9f9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    color: #4e4e4e;
    font-size: 14px;
    word-break: break-all;
  }

  button {
    background-color: transparent;
    border: none;
    color: #ff4d4f;
    cursor: pointer;
    font-size: 14px;
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #4e4e4e;
  }
`;
