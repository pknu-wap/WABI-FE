import React, {useState} from 'react';
import {signUp} from '../../../api/signUp';
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

  const validateUsernameInput = () => {
    const usernameRegex = /^[a-z0-9]{4,10}$/;
    if (!usernameRegex.test(loginFormData.username)) {
      alert(
        '알파벳 소문자와 숫자로만 구성된 최소 4자 이상, 10자 이하여야 합니다.',
      );
      return false;
    }
    return true;
  };

  const validatePasswordInput = () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[*~!@#])[A-Za-z\d*~!@#]{8,15}$/;
    if (!passwordRegex.test(loginFormData.password)) {
      alert(
        '비밀번호는 8자 이상, 15자 이하이며, 알파벳 대소문자, 숫자, 특수 문자(*~!@#)를 포함해야 합니다. 특수문자는 반드시 하나 이상 포함되어야 합니다.',
      );
      return false;
    }
    return true;
  };

  const validateIsCorrectPasswordInput = () => {
    if (loginFormData.password !== loginFormData.passwordCheck) {
      alert('입력하신 비밀번호와 일치하지 않습니다.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateUsernameInput()) {
      return;
    }
    if (!validatePasswordInput()) {
      return;
    }
    if (!validateIsCorrectPasswordInput()) {
      return;
    }

    try {
      const response = signUp(
        loginFormData.username,
        loginFormData.password,
        loginFormData.email,
      );
      alert('회원가입에 성공하였습니다!');
      return response;
    } catch (error: any) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    }
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
