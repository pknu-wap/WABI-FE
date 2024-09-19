import styled from "styled-components";

export const ParticipateProgressBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ParticipateNum = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    width: 100%;
    margin-top: 10px;
    h3{
        font-size: 15px;
        line-height: 0.1;
    }
`;

export const Progress = styled.div`
    width: 400px;
    height: 10px;
    background-color: #4E54F5;
    border-radius: 5px;
`;