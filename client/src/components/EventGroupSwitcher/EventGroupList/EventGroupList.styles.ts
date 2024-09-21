import styled from 'styled-components';

export const GroupListGrid = styled.div`
  display: grid;
  grid-template-columns: 249px 249px 249px;
  height: 100%;
  gap: 24px;
  margin: 20px 16px;
  background-color: #ccc;
  @media (max-width: 768px) {
    grid-template-columns: 2fr;
  }
`;
