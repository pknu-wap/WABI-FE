import styled from 'styled-components';

export const EventListGrid = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 380px 380px;
    gap: 24px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
   margin: 20px 16px;
`;
