# WABI Front-End
<p align= center>
<img src="https://github.com/user-attachments/assets/f77b774e-9d30-4510-a64c-c6175358a709" width="700px" alt="Qr체크인">
</p>


<br/>

## 🎨 소개 (Introduction) 
부경대학교 소속 단체 확인 서비스 (학생회비 납부자, 이벤트 체크인 확인) FE 레포지토리
<br/>  
[백엔드 깃허브 레포지토리](https://github.com/pknu-wap/WABI-BE)  
<br/>
<img src="https://github.com/user-attachments/assets/78b5d905-0ac5-45ab-90cd-45a838d58228" width="600" />



## ✨ 기술 스택 (Tech Stack)
### 프론트
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> 

<br/>

### 백엔드
<img src="https://img.shields.io/badge/kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white"> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/> <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"/> <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>

<br/>

### 팀 문화
1. 페어 프로그래밍 진행
2. 성실하게 기록하기 - [프론트 위키](https://github.com/pknu-wap/WABI-FE/wiki) , [백엔드 위키](https://github.com/pknu-wap/WABI-BE/wiki)
3. 언제나 명확한 이유가 있을 때만, 기술 도입
4. 화날거 같으면 용용체 쓰기
5. 안 되는 게 있으면 마감 전까지 공유하기
6. 실수도 말 착하게 하기
7. 이야기가 길어지면 잠깐 쉬고 생각 정리할 시간 갖기
8. 비대면 카메라 켜기
9. 코드 폭탄 금지
10. 대면 회의
11. 뭔가 문제가 생기면 상황 설명 자세하게 해주기
12. 회의 시간 잘 지키기
13. 모호한 점이 있을 경우 즉시 질문하기

### 기능 설명

1. 회원가입 및 로그인

- Spring Security 및 jwt를 이용한 StateLess 지향한다.
  
[이름]
```
최소 4자 이상, 10자 이하여야 한다.
알파벳 소문자(a-z), 숫자(0-9)로만 구성된다.
```
[비밀번호]
```
최소 8자 이상, 15자 이하여야 한다.
알파벳 대소문자(a-z, A-Z), 숫자(0-9), 특수 문자(*~!@#)중 하나로 구성된다.
특수문자는 반드시 하나 이상 있어야 한다.
```
<br/>
  
2. 그룹 
- 이벤트 관리자는 그룹을 생성할 수 있다.
- 해당 그룹은 여러 이벤트에 등록될 수 있다.
- 이미 생성된 그룹을 수정하거나 삭제할 수 있다.
[인원 자동 추가]
- 양식에 맞게 작성된 파일(.xlsx, .csv)을 첨부하여 한 번에 많은 인원을 그룹에 추가할 수 있다.
[인원 수동 추가]
- 관리자는 수동으로 그룹에 인원을 추가할 수 있다.
<br/>
  
3. 이벤트
- 이벤트 이름, 이벤트 기간(시작/종료 날짜), 참여 그룹, 최대 참여 인원을 입력받아 새로운 이벤트를 생성한다.
- 이벤트 수정, 삭제를 할 수 있다.
- 특정 이벤트에 대해 참여자의 출석 여부를 기록할 수 있는 체크인 화면으로 이동할 수 있다.
<br/>

4. 체크인
- 부경대학교 모바일 학생증 QR을 인식합니다.
- QR 데이터 객체 중 학번만 받아 해당 이벤트에 존재하는 사람인지 확인합니다.
- 존재한다면 출석체크를 할 수 있습니다.

### CI/CD
![image](https://github.com/user-attachments/assets/e77fef6c-2945-46bf-8474-a950e0a49df2)


## 👨‍💻 기여자 (Contributors)
### PM
<table>
  <tr>
        <td align="center">
       <img src="https://avatars.githubusercontent.com/u/108349655?v=4" width="120px;"/>   
        <br />
        <a href="https://github.com/SeongHoonC" title="Code"><b>SeongHoonC</b></a>
  </tr>
  <tr>
        <td align="center"><b>PM</b></td>
  </tr>
</table>

### 프론트
<table>
  <tr>
    <td align="center">
       <img src="https://avatars.githubusercontent.com/u/105052068?v=4" width="120px;"/>   
        <br />
        <a href="https://github.com/seongwon030" title="Code"><b>seongwon030</b></a>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/35947667?v=4" width="120px;"/> 
        <br />
        <a href="https://github.com/wkdghdwns199" title="Code"><b>wkdghdwns199</b></a>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/112786665?v=4" width="120px;"/> 
        <br />
        <a href="https://github.com/oesnuj" title="Code"><b>oesnuj</b></a>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/112613300?v=4" width="120px;"/> 
        <br />
        <a href="https://github.com/YJeongs" title="Code"><b>YJeongs</b></a>
    </td> 
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/113815454?v=4" width="120px;"/> 
        <br />
        <a href="https://github.com/newdesigner" title="Code"><b>gjsk132</b></a>
    </td> 
  </tr>
  <tr>
    <td align="center"><b>하키(서성원)</b></td>
    <td align="center"><b>마이크(장홍준)</b></td>
    <td align="center"><b>딜런(김준서)</b></td>
    <td align="center"><b>퓨어(하윤정)</b></td>
    <td align="center"><b>나봉(허나영)</b></td>
  </tr>
  <tr>
    <td align="center"><b>FrontEnd</b></td>
    <td align="center"><b>FrontEnd</b></td>
    <td align="center"><b>FrontEnd</b></td>
    <td align="center"><b>FrontEnd</b></td>
    <td align="center"><b>Design</b></td>
  </tr>
</table>

### 백엔드
<table>
  <tr>
    <td align="center">
       <img src="https://avatars.githubusercontent.com/u/111286262?v=4" width="120px;"/>   
        <br />
        <a href="https://github.com/JONG-KYEONG" title="Code"><b>JONG-KYEONG</b></a>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/49135677?v=4" width="120px;"/> 
        <br />
        <a href="https://github.com/Zepelown" title="Code"><b>Zepelown</b></a>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/48638700?v=4" width="120px;"/> 
        <br />
        <a href="https://github.com/FhRh" title="Code"><b>FhRh</b></a>
    </td>
  </tr>
  <tr>
    <td align="center"><b>양갱 (김종경)</b></td>
    <td align="center"><b>제페론 (윤성원)</b></td>
    <td align="center"><b>듀 (양두영)</b></td>
  </tr>
  <tr>
    <td align="center"><b>BackEnd</b></td>
    <td align="center"><b>BackEnd</b></td>
    <td align="center"><b>BackEnd</b></td>
  </tr>
</table>


## 📂 프로젝트 구조 (Project Structure)
```
📦src
 ┣ 📂api                     # 비동기 API 요청 함수 모음
 ┣ 📂components              # 재사용 가능한 컴포넌트 모음
 ┃ ┣ 📂common                # 공통으로 사용하는 UI 컴포넌트
 ┃ ┣ 📂EventAndGroupList       
 ┃ ┣ 📂event_detail            
 ┃ ┣ 📂GroupDetail            
 ┃ ┗ 📂QrCheckIn               
 ┣ 📂constants               # 프로젝트 전역에서 사용하는 상수들
 ┣ 📂hooks                   # 커스텀 훅
 ┣ 📂pages                   # 페이지
 ┃ ┣ 📂EventAndGroupList       
 ┃ ┣ 📂EventDetail             
 ┃ ┣ 📂GroupDetail             
 ┃ ┗ 📂QrCheckIn               
 ┣ 📂recoil                  # Recoil 전역 상태 관리
 ┣ 📂types                   # 타입 정의 파일들
 ┣ 📂utils                   # 유틸리티 함수 모음
 ┣ 📜App.css                 # 애플리케이션 전역 스타일시트
 ┣ 📜App.tsx                 # 애플리케이션 진입점 컴포넌트
 ┣ 📜index.css               # 애플리케이션 초기 스타일시트
 ┣ 📜index.tsx               # 애플리케이션 진입점
 ┗ 📜react-qr-scanner.d.ts   # react-qr-scanner 타입 정의 파일

```
<br/>
