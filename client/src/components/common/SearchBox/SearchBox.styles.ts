import styled from 'styled-components';

const SearchBoxFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  width: 430px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 0;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const InputBox = styled.input`
  font-size: 20px;
  border: none;
  width: 350px;
  height: 40px;
`;

export {SearchBoxFrame, SearchIcon, InputBox};
