import React from 'react';
import * as Styled from 'components/common/InputField/InputField.styles';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  required: boolean;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  placeholder,
  required,
  type = 'text',
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <Styled.InputContainer>
      <Styled.Label>
        {label} {required && <Styled.Required>*</Styled.Required>}
      </Styled.Label>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </Styled.InputContainer>
  );
};

export default InputField;
