import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    padding:0;
    margin:0;
    background-color: #F0F4F7;
`;

const Event = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
`

const Date = styled.div`
    width: 100%;
    height: 30%;
    border: 1px solid black;
`

const QrStyle = styled.div`
    border-radius: 25px;
    background-color: #a18ee8;
    border: 15px solid #a18ee8;
    padding:10px;
`

export {Wrapper, Event, Date, QrStyle};