import React from 'react';
import Button from "../../common/Button/Button";
//함수타입으로 정의 : () =>

interface MemberUpdateButtonProps {
  onClick?: () => void;
  isFileUpload?: boolean;
}

const MemberUpdateButton = ({ onClick, isFileUpload} : MemberUpdateButtonProps) => {
  const buttonText = isFileUpload ? '인원 한 번에 등록' : '인원 수동 추가';

  return (
      <Button
          onClick={onClick}
          height="40px"
          borderRadius="10px"
          fontSize="20px"
          buttonColor="white"
          padding="10px 16px 10px 16px"
          margin="0 0 0 15px">
        {buttonText}
      </Button>
  )
};

export default MemberUpdateButton;
