import styled from 'styled-components';

export const ParticipateProgressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParticipateNum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 15px;
    line-height: 0.1;
  }
`;

export const Progress = styled.div`
  width: 350px;
  height: 5px;
  background-color: #ccc;
  border-radius: 5px;
`;

export const Gauge = styled.div<{percentage: number}>`
  height: 100%;
  background-color: #4e54f5;
  border-radius: 5px;
  width: ${({percentage}) => `${percentage}%`};
  transition: width 0.3s ease;
`;
