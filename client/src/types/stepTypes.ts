import React from "react";
import {student} from "./studentTypes";

export interface stepProps {
    step?: number;
    nextStep ?: () => void;
    prevStep ?: () => void;
    student : student;
    handleChange ?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

