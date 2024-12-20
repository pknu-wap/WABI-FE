import React, {useState, useEffect} from 'react';
import * as Styled from 'components/common/Header/Header.styles';
import Logo from 'components/common/Logo/Logo';
import Button from 'components/common/Button/Button';
import {Link, useNavigate} from 'react-router-dom';
import {clearTokens, getAccessToken} from 'api/logIn';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 액세스 토큰 확인하여 로그인 상태 관리
  useEffect(() => {
    const token = getAccessToken();
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태로 설정
  }, []);

  // 로그아웃 핸들러
  const handleLogout = () => {
    clearTokens(); // 토큰 초기화
    setIsLoggedIn(false); // 로그인 상태 업데이트
    navigate('/signin'); // 로그인 페이지로 이동
  };

  return (
    <Styled.HeaderStyles>
      <Styled.LogoGroup>
        <Logo
          src={'images/wabi.png'}
          alt={'logo1'}
          text={'WABI'}
          width={'40px'}
          height={'40px'}
          redirectUrl={'/'}
        />
        <Logo
          src={'images/user.png'}
          alt={'logo2'}
          text={'WAP'}
          width={'30px'}
          height={'30px'}
        />
      </Styled.LogoGroup>

      {isLoggedIn ? (
        // 로그아웃 버튼
        <Button
          width="80px"
          height="32px"
          buttonColor="#FF4E50"
          borderRadius="10px"
          fontColor="white"
          fontSize="16px"
          padding="10px 16px 10px 16px"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        // 로그인 버튼
        <Button
          width="60px"
          height="32px"
          buttonColor="#4E54F5"
          borderRadius="10px"
          fontColor="white"
          fontSize="16px"
          padding="10px 16px 10px 16px"
        >
          <Link to="/signin" style={{textDecoration: 'none', color: 'inherit'}}>
            Login
          </Link>
        </Button>
      )}
    </Styled.HeaderStyles>
  );
};

export default Header;
