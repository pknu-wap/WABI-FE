import React from 'react';
import {stepProps} from '../../../../types/stepTypes';
import * as Styled from './RequiredStep.styles';
import Button from '../../../common/Button/Button';
import InputField from '../../../common/InputField/InputField';

const RequiredStep = ({nextStep, student, handleChange}: stepProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Name>
          <p>필수 항목 입력</p>
        </Styled.Name>
        <InputField
          label="학번"
          type="text"
          name="studentId"
          required={true}
          placeholder="그룹원 학번 입력"
          value={student?.studentId}
          onChange={handleChange}
        />
        <InputField
          label="이름"
          type="text"
          name="name"
          required={true}
          placeholder="그룹원 이름 입력"
          value={student?.name}
          onChange={handleChange}
        />
        <Styled.ButtonWrapper>
          <Button
            onClick={nextStep}
            width="106px"
            height="40px"
            fontColor="#4E54F5"
            buttonColor="white"
            borderColor="#C1C7CD"
            borderRadius="10px"
          >
            다음으로
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default RequiredStep;
