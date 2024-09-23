import React, {useState} from 'react';
import Steps from './steps/Steps';
import {student} from '../../../types/studentTypes';
import ModalFrame from '../../common/ModalFrame/ModalFrame';

interface FileUploadModalProps {
  modalStateValue: boolean;
  groupId: number;
}

const ManualUploadModal: React.FC<FileUploadModalProps> = ({
  modalStateValue,
  groupId,
}) => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const [student, setStudent] = useState<student>({
    studentId: '',
    name: '',
    club: '',
    position: '',
    joinDate: '',
    college: '',
    major: '',
    tel: '',
    academicStatus: '',
  });

  const handleChange = (
    studentInfoInput: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const {name, value} = studentInfoInput.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value,
    }));
  };
  if (modalStateValue === false) return null;

  return (
    <ModalFrame>
      <Steps
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        student={student}
        handleChange={handleChange}
        groupId={groupId}
      />
    </ModalFrame>
  );
};

export default ManualUploadModal;
