import styled from 'styled-components';

export const EventListGrid = styled.div`
  display: grid;
  grid-template-columns: 430px 430px;
  gap: 15px;
  background-color: #ccc;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
