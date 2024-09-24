import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #f0f4f7;
`;

const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const StatusAndButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export {Wrapper, InnerLayout, Image, Text, StatusAndButtonFrame};
