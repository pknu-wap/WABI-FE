import {stepProps} from "../../../../types/stepTypes";
import RequiredStep from "./RequiredStep";
import OptionalStep from "./OptionalStep";
import React from "react";

const Steps = ({step, nextStep, prevStep, student, handleChange} : stepProps) => {


    if (step == 1) {
        return (
            <RequiredStep nextStep={nextStep} student={student} handleChange={handleChange}/>
        )
    }
    return (
        <OptionalStep prevStep={prevStep} student={student} handleChange={handleChange}/>
    )
}

export default Steps;