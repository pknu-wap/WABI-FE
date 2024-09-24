import {stepProps} from '../../../../types/stepTypes';
import RequiredStep from './RequiredStep';
import OptionalStep from './OptionalStep';
import React from 'react';

const Steps = ({
  step,
  nextStep,
  prevStep,
  student,
  handleChange,
  groupId,
}: stepProps) => {
  if (step === 1) {
    return (
      <RequiredStep
        nextStep={nextStep}
        student={student}
        handleChange={handleChange}
        groupId={groupId}
      />
    );
  }
  return (
    <OptionalStep
      prevStep={prevStep}
      student={student}
      handleChange={handleChange}
      groupId={groupId}
    />
  );
};

export default Steps;
