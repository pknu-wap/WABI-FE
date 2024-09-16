import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
    border: 3px solid white;
    border-radius: 15px;
    padding: 0px 10px 10px 15px;
    cursor: pointer;
    &:hover {
        border: 3px solid #4E54F5;
    }
`;


export const EventTitle = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    img{
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin-top: 20px;
    }
`

export const EventTime = styled.div`
    display: flex;
    flex-direction: row;
    h3 {
        font-size: 15px;
    }
    span{
        color: #4E54F5;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 15px;
        color: lightgray;
        margin: 0;
        padding: 0; 
        line-height: 1.2;
    }
`;
