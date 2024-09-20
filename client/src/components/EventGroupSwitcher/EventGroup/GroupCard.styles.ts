import styled from 'styled-components';

export const GroupCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100px;
  border: 3px solid white;
  border-radius: 15px;
  padding: 0px 10px 10px 15px;

  &:hover {
    border: 3px solid #4e54f5;
  }
  background-color: white;
`;

export const GroupTitle = styled.div`
  height: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

export const GroupNumber = styled.div``;
