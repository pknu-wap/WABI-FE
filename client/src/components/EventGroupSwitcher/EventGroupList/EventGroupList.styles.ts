import styled from 'styled-components';

export const GroupListGrid = styled.div`
  display: grid;
  grid-template-columns: 289px 289px 289px;
  gap: 15px;
  background-color: #ccc;
  @media (max-width: 768px) {
    grid-template-columns: 2fr;
  }
`;
