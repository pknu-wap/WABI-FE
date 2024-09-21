import styled from 'styled-components';

const TextLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  //background-color: #61dafb;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const TitleText = styled.div`
  font-size: 30px;
  margin-right: 24px;
`;

const SubTitleText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {TextLayout, TitleText, SubTitleText};
