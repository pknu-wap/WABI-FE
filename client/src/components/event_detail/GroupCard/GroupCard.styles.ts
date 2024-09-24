import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 10px;
  width: 213px;
  height: 77px;
  background-color: white;
  border: 3px solid white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 17px;

  &:hover {
    border: 3px solid #4e54f5;
  }
`;
