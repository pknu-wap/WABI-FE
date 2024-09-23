import React from 'react';
import {stepProps} from '../../../../types/stepTypes';
import {manualUpload} from '../../../../api/manualUpload';
import InputField from '../../../common/InputField/InputField';
import Button from '../../../common/Button/Button';
import * as Styled from './OptionalStep.styles';

const OptionalStep = ({
  prevStep,
  student,
  handleChange,
  groupId,
}: stepProps) => {
  return (
    <Styled.Container>
      <Styled.Name>
        <p>선택 항목 입력</p>
      </Styled.Name>
      <Styled.Sort>
        <InputField
          label="단과대학"
          type="text"
          name="college"
          required={false}
          placeholder="선택 항목 입력"
          value={student?.college}
          onChange={handleChange}
        />
        <InputField
          label="학과"
          type="text"
          name="major"
          required={false}
          placeholder="선택 항목 입력"
          value={student?.major}
          onChange={handleChange}
        />
      </Styled.Sort>
      <Styled.Sort>
        <InputField
          label="소속동아리"
          type="text"
          name="club"
          required={false}
          placeholder="선택 항목 입력"
          value={student?.club}
          onChange={handleChange}
        />
        <InputField
          label="직책"
          type="text"
          name="position"
          required={false}
          placeholder="선택 항목 입력"
          value={student?.position}
          onChange={handleChange}
        />
      </Styled.Sort>
      <InputField
        label="가입일자"
        type="text"
        name="joinDate"
        required={false}
        placeholder="선택 항목 입력"
        value={student?.joinDate}
        onChange={handleChange}
      />
      <InputField
        label="재학유무"
        type="text"
        name="academicStatus"
        required={false}
        placeholder="선택 항목 입력"
        value={student?.academicStatus}
        onChange={handleChange}
      />
      <InputField
        label="휴대폰 번호"
        type="text"
        name="tel"
        required={false}
        placeholder="선택 항목 입력"
        value={student?.tel}
        onChange={handleChange}
      />
      <Styled.ButtonWrapper>
        <Styled.PreButtonWrapper>
          <Button
            onClick={prevStep}
            width="106px"
            height="40px"
            fontColor="#4E54F5"
            buttonColor="white"
            borderRadius="10px"
            borderColor="#C1C7CD"
          >
            이전으로
          </Button>
        </Styled.PreButtonWrapper>
        <Styled.NextButtonWrapper>
          <Button
            onClick={() => {
              manualUpload(groupId, [student]);
            }}
            width="106px"
            height="40px"
            fontColor="#4E54F5"
            buttonColor="white"
            borderRadius="10px"
            borderColor="#C1C7CD"
          >
            추가하기
          </Button>
        </Styled.NextButtonWrapper>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default OptionalStep;
