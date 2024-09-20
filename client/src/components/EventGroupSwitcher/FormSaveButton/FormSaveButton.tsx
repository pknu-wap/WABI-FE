import React from 'react';
import * as Styled from 'components/EventGroupSwitcher/FormSaveButton/FormSaveButton.styles';

const FormSaveButton = () => {
  return (
    <Styled.SaveButton
      type="submit"
      width="106px"
      height="40px"
      buttonColor="#FFFFFF"
      hasBorder="true"
      borderColor="#C1C7CD"
      borderRadius="10px"
      fontColor="#4E54F5;
"
      fontSize="16px"
    >
      저장하기
    </Styled.SaveButton>
  );
};

export default FormSaveButton;
