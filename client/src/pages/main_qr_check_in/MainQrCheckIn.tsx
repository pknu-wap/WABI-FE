import styled from "styled-components";
import QrScan from './QrScan'
import "./MainQrCheckIn.css";
import React, {useState} from "react";


const MainQrCheckIn = () => {
    return (
       <div className="test">
           <div className="Event">
               <h2>EVENT NAME</h2>
               <div className="date">
               <h3>2024.08.05</h3>
               <h3>2024.08.05</h3>
           </div>
                <div className="group">
                    SELECT GROUP
                </div>
           </div>
           <div className="Qr">
               <div className="QrScanner"><QrScan/></div>
               <h2>QR CODE를 화면의 사각형 안에 맞춰주세요.</h2>
           </div>
       </div>
    )
}

export default MainQrCheckIn;
