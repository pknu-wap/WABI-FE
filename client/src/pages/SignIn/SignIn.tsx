import Header from '../../components/common/Header/Header';
import React from 'react';
import SignInForm from '../../components/Authentication/SignInForm/SignInForm';
import * as Styled from 'pages/SignIn/SignIn.styles';

const SignIn = () => {
  return (
    <>
      <Header />
      <Styled.SignInContainer>
        <SignInForm />
      </Styled.SignInContainer>
    </>
  );
};

export default SignIn;
