import React from 'react';
import * as Styled from 'components/EventGroupSwitcher/FormSaveButton/FormSaveButton.styles';

interface FormSaveButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  width?: string; // 버튼의 너비
  height?: string; // 버튼의 높이
  onClick?: () => void;
}

const FormSaveButton = ({
  text,
  type = 'button',
  width = '106px',
  height = '40px',
  onClick,
}: FormSaveButtonProps) => {
  return (
    <Styled.SaveButton
      type={type}
      width={width}
      height={height}
      buttonColor="#FFFFFF"
      hasBorder="true"
      borderColor="#C1C7CD"
      borderRadius="10px"
      fontColor="#4E54F5"
      fontSize="16px"
      onClick={onClick}
    >
      {text}
    </Styled.SaveButton>
  );
};

export default FormSaveButton;
