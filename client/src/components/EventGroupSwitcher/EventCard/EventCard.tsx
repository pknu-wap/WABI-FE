import React from "react";
import * as Styled from "./EventCard.styles";
import ParticipateProgress from "../EventCard/ParticipateProgress/ParticipateProgress";

const EventCard = () => {

    return (
        <Styled.Card>
            <Styled.EventTitle>
                <h2>2024 2학기 응원전</h2>
                <img src='./images/EditEvent.png' alt='EditEvenIcon' />
            </Styled.EventTitle>
            <Styled.EventTime>
                <h3>2024.10.15 14:00 &nbsp;&nbsp;<span>{">"}</span>&nbsp;&nbsp;</h3>
                <h3>2024.10.15 16:00</h3>
            </Styled.EventTime>
            <Styled.Group>
                <h3>wap2022</h3>
                <h3>wap2023</h3>
                <h3>wap2024 외 4그룹</h3>
            </Styled.Group>
            <ParticipateProgress/>
        </Styled.Card>
    )
}

export default EventCard;