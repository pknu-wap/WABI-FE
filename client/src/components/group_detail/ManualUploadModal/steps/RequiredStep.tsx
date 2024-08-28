import React from "react";
import {stepProps} from "../../../../types/stepTypes";

const RequiredStep = ({nextStep, student, handleChange}: stepProps) => {

    return (
        <div>
            <h1>필수 항목 입력</h1>
            학번
            <input
                type="text"
                name="studentId"
                value={student?.studentId}
                onChange={handleChange}
            />

            이름
            <input
                type="text"
                name="name"
                value={student?.name}
                onChange={handleChange}
            />
            <button onClick={nextStep}> 다음</button>
        </div>
    )
}

export default RequiredStep;