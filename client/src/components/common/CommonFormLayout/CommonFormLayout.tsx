import React from 'react';
import * as Styled from 'components/common/CommonFormLayout/CommonFormLayout.styles';
import Button from 'components/common/Button/Button';

interface CreateFormLayoutProps {
  title: string;
  children: React.ReactNode;
  onSubmit: () => void;
  onDelete?: () => void;
}

const CommonFormLayout = ({
  title,
  children,
  onSubmit,
  onDelete,
}: CreateFormLayoutProps) => {
  return (
    <Styled.FormContainer>
      <Styled.FormTitle>{title}</Styled.FormTitle>
      {onDelete && (
        <Styled.DeleteButton onClick={onDelete}>
          <Styled.DeleteIcon
            src="images/Icon/DeleteButtonIcon.png"
            alt="Delete"
          />
        </Styled.DeleteButton>
      )}
      <Styled.Form onSubmit={onSubmit}>
        {children}
        <Button
          type="submit"
          width="106px"
          height="40px"
          buttonColor="#4E54F5"
          borderColor="#C1C7CD"
          borderRadius="10px"
          fontColor="#FFFFFF"
          fontSize="16px"
        >
          저장하기
        </Button>
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default CommonFormLayout;
