import styled from 'styled-components';

export const EventListGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 325px 325px;
  gap: 18px;
  margin-top: 20px;
  margin-left: 14px;
  margin-right: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
