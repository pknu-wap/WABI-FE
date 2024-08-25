import {stepProps} from "../../../../types/stepTypes";
import Step1 from "./Step1";
import Step2 from "./Step2";
import React from "react";

const Steps = ({step, nextStep, prevStep, student, handleChange} : stepProps) => {


    if (step == 1) {
        return (
            <Step1 nextStep={nextStep} student={student} handleChange={handleChange}/>
        )
    }
    return (
        <Step2 prevStep={prevStep} student={student} handleChange={handleChange}/>
    )
}

export default Steps;