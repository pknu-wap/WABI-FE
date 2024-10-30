import React, {useState} from 'react';
import InputField from 'components/common/InputField/InputField';
import CommonFormLayout from 'components/common/CommonFormLayout/CommonFormLayout';
import {Link} from 'react-router-dom';
import * as Styled from 'components/Authentication/SignInForm/SignInForm.styles';

const SignInForm = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = () => {
    //로그인 버튼 눌렀을때의 로직
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginFormData(prevData => ({...prevData, [name]: value}));
  };

  return (
    <CommonFormLayout
      title="로그인"
      onSubmit={handleSubmit}
      buttonText={'로그인'}
      requiredNoteText={''}
      errorMessage={'정보를 모두 입력해주세요'}
    >
      <InputField
        name="username"
        label="아이디"
        placeholder="아이디를 입력해주세요"
        required={true}
        type="text"
        value={loginFormData.username}
        onChange={handleInputChange}
      />
      <InputField
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        required={true}
        type="password"
        value={loginFormData.password}
        onChange={handleInputChange}
      />
      <Styled.SignUpLinkContainer>
        <Link to="/signup">회원가입 하러가기</Link>
      </Styled.SignUpLinkContainer>
    </CommonFormLayout>
  );
};

export default SignInForm;
