import React from "react";
import * as Styled from './MainQrCheckIn.styles';
import QrScan from '../../components/QrCheckIn/QrScan';

const MainQrCheckIn = () => {
    return (
       <Styled.Wrapper>
         <Styled.Event>
           <h2>EVENT NAME</h2>
           <Styled.EventTime>
             <h3>2024.09.13 18:30</h3>
             <h3>~</h3>
             <h3>2024.09.13 20:00</h3>
           </Styled.EventTime>
           <Styled.GroupBox>
             참가 가능한 그룹
           </Styled.GroupBox>
         </Styled.Event>
           <div className="Qr">
               <QrScan/>
               <h2>QR CODE를 화면의 사각형 안에 맞춰주세요.</h2>
           </div>
       </Styled.Wrapper>
    )
}

export default MainQrCheckIn;