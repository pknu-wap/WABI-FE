import styled from 'styled-components';

export const GroupListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 218px);
  height: 100%;
  gap: 12px;
  margin-left: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 2fr;
  }
`;
