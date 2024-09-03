import React from "react";
import QrScan from './QrScan'
import * as S from './QrCheckIn.styles';

const MainQrCheckIn = () => {
    return (
       <S.Wrapper>
           <S.Event>
               <h2>EVENT NAME</h2>
               <div>
                   <h3>2024.08.05</h3>
                   <h3>2024.08.05</h3>
                </div>
                <S.Date>
                    SELECT GROUP
                </S.Date>
           </S.Event>
           <div className="Qr">
               <S.QrStyle><QrScan/></S.QrStyle>
               <h2>QR CODE를 화면의 사각형 안에 맞춰주세요.</h2>
           </div>
       </S.Wrapper>
    )
}

export default MainQrCheckIn;