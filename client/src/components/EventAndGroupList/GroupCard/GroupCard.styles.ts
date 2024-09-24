import styled from 'styled-components';

export const GroupCard = styled.div`
  width: 170px;
  height: 60px;
  border: 3px solid white;
  border-radius: 15px;
  padding: 0px 10px 5px 15px;
  background-color: white;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
  &.selected {
    border: 3px solid #4e54f5;
  }
`;

export const GroupTitle = styled.div`
  position: relative;
  margin-top: 20px;
  width: 145px;
  height: 15px;
  font-size: 12px;
`;

export const UpdateButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const UpdateIcon = styled.img`
  width: 22px;
  height: 24px;
`;
