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

  &.selected {
    border: 3px solid #4e54f5;
  }
`;

export const GroupTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 180px;
  height: 17px;
  font-size: 13px;
`;

export const UpdateButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: -30px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const UpdateIcon = styled.img`
  width: 22px;
  height: 24px;
`;
