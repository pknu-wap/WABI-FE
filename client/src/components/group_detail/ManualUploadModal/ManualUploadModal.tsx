import React, {useState} from 'react';
import Steps from './steps/Steps';
import {student} from "../../../types/studentTypes";


const ManualUploadModal = () => {
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const [student, setStudent] = useState<student>(
        {
            studentId: '',
            name: '',
            club: '',
            position: '',
            joinDate: '',
            college: '',
            major: '',
            tel: '',
            status: '',
        });

    const handleChange = (studentInfoInput: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = studentInfoInput.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
        console.log(student);
    };

    return (
        <div>
            <Steps step={step} nextStep={nextStep} prevStep={prevStep} student={student} handleChange={handleChange}/>

        </div>
    )
}

export default ManualUploadModal;