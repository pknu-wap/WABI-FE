import React, {useState} from 'react';
import InputField from 'components/common/InputField/InputField';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import * as Styled from 'components/Authentication/SignUpForm/SignUpForm.styles';
import {Link} from 'react-router-dom';

const SignInForm = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
    passwordCheck: '',
    email: '',
  });

  const handleSubmit = () => {
    if (loginFormData.password !== loginFormData.passwordCheck) {
      alert('비밀번호를 다시 확인해주세요');
      return;
    }

    // 회원가입 API 호출 로직 추가
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginFormData(prevData => ({...prevData, [name]: value}));
  };

  return (
    <>
      <CommonFormLayout
        title="회원가입"
        onSubmit={handleSubmit}
        buttonText="회원가입"
        requiredNoteText=""
        errorMessage={'정보를 모두 입력해주세요'}
      >
        <InputField
          name="username"
          label="아이디"
          placeholder="아이디를 입력해주세요"
          required
          type="text"
          value={loginFormData.username}
          onChange={handleInputChange}
        />
        <InputField
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          required
          type="password"
          value={loginFormData.password}
          onChange={handleInputChange}
        />
        <InputField
          name="passwordCheck"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          required
          type="password"
          value={loginFormData.passwordCheck}
          onChange={handleInputChange}
        />
        <InputField
          name="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          required
          type="text"
          value={loginFormData.email}
          onChange={handleInputChange}
        />
        <Styled.SignInLinkContainer>
          <Link to="/signin">로그인 하러가기</Link>
        </Styled.SignInLinkContainer>
      </CommonFormLayout>
    </>
  );
};

export default SignInForm;
