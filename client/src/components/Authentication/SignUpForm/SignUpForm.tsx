import React, {useState} from 'react';
import InputField from 'components/common/InputField/InputField';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import * as Styled from 'components/Authentication/SignUpForm/SignUpForm.styles';
import {Link} from 'react-router-dom';

const SignInForm = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    username: '',
    password: '',
    passwordCheck: '',
    email: '',
  });

  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-z0-9]{4,10}$/; // 소문자, 숫자, 4~10자
    return usernameRegex.test(username);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[!@#*~])(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#*~]{8,15}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    if (!validateUsername(signUpFormData.username)) {
      alert('아이디는 소문자와 숫자로 구성된 4~10자여야 합니다.');
      return;
    }
    if (!validatePassword(signUpFormData.password)) {
      alert(
        '비밀번호 조건:\n' +
          '- 8자 이상, 15자 이하\n' +
          '- 알파벳 대소문자, 숫자, 특수 문자(*, ~, !, @, #) 포함\n' +
          '- 특수 문자는 반드시 하나 이상 포함',
      );
      return;
    }
    if (signUpFormData.password !== signUpFormData.passwordCheck) {
      alert('비밀번호를 다시 확인해주세요');
      return;
    }

    // 회원가입 API 호출 로직 추가
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSignUpFormData(prevData => ({...prevData, [name]: value}));
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
          value={signUpFormData.username}
          onChange={handleInputChange}
        />
        <InputField
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          required
          type="password"
          value={signUpFormData.password}
          onChange={handleInputChange}
        />
        <InputField
          name="passwordCheck"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          required
          type="password"
          value={signUpFormData.passwordCheck}
          onChange={handleInputChange}
        />
        <InputField
          name="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          required
          type="email"
          value={signUpFormData.email}
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
