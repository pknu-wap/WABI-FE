import React from "react";
import QrScan from './QrScan'
import {Wrapper, Event, Date, QrStyle} from './QrCheckIn.styles';

const MainQrCheckIn = () => {
    return (
       <Wrapper>
           <Event>
               <h2>EVENT NAME</h2>
               <div>
                   <h3>2024.08.05</h3>
                   <h3>2024.08.05</h3>
                </div>
                <Date>
                    SELECT GROUP
                </Date>
           </Event>
           <div className="Qr">
               <QrStyle><QrScan/></QrStyle>
               <h2>QR CODE를 화면의 사각형 안에 맞춰주세요.</h2>
           </div>
       </Wrapper>
    )
}

export default MainQrCheckIn;