import React from "react";
import EventCard from "../EventCard/EventCard";
import * as Styled from "./EventCardList.styles";

const EventCardList = () => {
    return (
            <Styled.EventList>
                <tbody>
                <tr>
                    <td><EventCard /></td>
                    <td><EventCard /></td>
                </tr>
                <tr>
                    <td><EventCard /></td>
                    <td><EventCard /></td>
                </tr>
                </tbody>
            </Styled.EventList>
    );
}

export default EventCardList;
