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
    padding: 150px;
`

const GroupBox = styled.div`
    width: 100%;
    height: 30%;
    border-top: 1px solid lightgray;
`

const EventTime = styled.div`
    display: flex;
    flex-direction: row;
`

export {Wrapper, Event, GroupBox,  EventTime};