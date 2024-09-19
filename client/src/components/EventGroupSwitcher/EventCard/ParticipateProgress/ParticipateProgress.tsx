import React from "react";
import * as Styled from "./ParticipateProgress.styles";

const ParticipateProgress = () => {
    return (
        <Styled.ParticipateProgressBox>
            <Styled.ParticipateNum>
                <h3>참여 수</h3>
                <h3>10 / 50 명</h3>
            </Styled.ParticipateNum>
            <Styled.Progress/>
        </Styled.ParticipateProgressBox>
    )
}

export default ParticipateProgress;