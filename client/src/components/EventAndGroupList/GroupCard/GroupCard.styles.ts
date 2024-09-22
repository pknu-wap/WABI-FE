import styled from 'styled-components';

export const GroupCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 77px;
  border: 3px solid white;
  border-radius: 15px;
  padding: 0px 10px 10px 15px;
  background-color: white;
  &:hover {
    border: 3px solid #4e54f5;
  }
  &.selected {
    border: 3px solid #4e54f5;
  }
`;

export const GroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  height: 17px;
  font-size: 13px;
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-top: 20px;
  }
`;
