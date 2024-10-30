import Header from 'components/common/Header/Header';
import React from 'react';
import SignUpForm from 'components/Authentication/SignUpForm/SignUpForm';
import * as Styled from 'pages/SignUp/SignUp.styles';

const SignIn = () => {
  return (
    <>
      <Header />
      <Styled.SignUpContainer>
        <SignUpForm />
      </Styled.SignUpContainer>
    </>
  );
};

export default SignIn;
