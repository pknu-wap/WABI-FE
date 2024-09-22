import React, {useState} from 'react';
import * as Styled from 'components/common/CommonFormLayout/CommonFormLayout.styles';
import FormSaveButton from 'components/EventGroupSwitcher/FormSaveButton/FormSaveButton';

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
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setIsError(true);
      const firstInvalidInput =
        form.querySelector<HTMLInputElement>('input:invalid');
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
    } else {
      setIsError(false);
      onSubmit();
    }
  };

  return (
    <Styled.FormContainer>
      {onDelete && (
        <Styled.DeleteButton onClick={onDelete}>
          <Styled.DeleteIcon
            src="images/Icon/DeleteButtonIcon.png"
            alt="Delete"
          />
        </Styled.DeleteButton>
      )}
      <Styled.FormTitle>{title}</Styled.FormTitle>
      <Styled.Form onSubmit={handleSubmit} noValidate>
        {children}
        <Styled.FormFooter>
          <Styled.RequiredNote>* 필수항목</Styled.RequiredNote>
          <FormSaveButton text={'저장하기'} type={'submit'} />
        </Styled.FormFooter>
        {isError && (
          <Styled.ErrorMessage>
            필수항목을 모두 입력하지 않았습니다.
          </Styled.ErrorMessage>
        )}
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default CommonFormLayout;
