import React from "react";
import QrScan from './QrScan'
import * as Styled from './MainQrCheckIn.styles';

const MainQrCheckIn = () => {
    return (
       <Styled.Wrapper>
           <Styled.Event>
               <h2>EVENT NAME</h2>
               <div>
                   <h3>2024.08.05</h3>
                   <h3>2024.08.05</h3>
                </div>
                <Styled.Date>
                    SELECT GROUP
                </Styled.Date>
           </Styled.Event>
           <div className="Qr">
               <Styled.QrStyle><QrScan/></Styled.QrStyle>
               <h2>QR CODE를 화면의 사각형 안에 맞춰주세요.</h2>
           </div>
       </Styled.Wrapper>
    )
}

export default MainQrCheckIn;