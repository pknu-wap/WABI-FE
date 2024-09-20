import React from 'react';
import * as Styled from 'components/common/InputField/InputField.styles';

interface InputFieldProps {
  name?: string;
  label: string;
  placeholder?: string;
  required: boolean;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const InputField = ({
  name,
  label,
  placeholder,
  required,
  type = 'text',
  value,
  onChange,
  readOnly = false,
}: InputFieldProps) => {
  return (
    <Styled.InputContainer>
      <Styled.Label htmlFor={name}>
        {label} {required && <Styled.Required>*</Styled.Required>}
      </Styled.Label>
      <Styled.Input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </Styled.InputContainer>
  );
};

export default InputField;
