import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 160px;
  border: 3px solid white;
  border-radius: 15px;
  padding: 0px 10px 10px 15px;
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

export const EventTitle = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: -5px;
  img {
    margin-top: 20px;
  }
`;

export const UpdateButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const UpdateIcon = styled.img`
  width: 22px;
  height: 24px;
`;

export const EventTime = styled.div`
  display: flex;
  flex-direction: row;
  h3 {
    font-size: 14px;
  }
  span {
    color: #4e54f5;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 14px;
    color: lightgray;
    margin: 0;
    padding: 0;
    line-height: 1.2;
  }
`;
