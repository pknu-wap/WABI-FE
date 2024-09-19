import styled from "styled-components";
import QrScanner from 'react-qr-scanner';

export const QrCameraReveral = styled.div`
    transform: scaleX(-1);
`
export const QrScannerContainer = styled.div`
  width: 580px;
  height: 500px;
    
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
  }
`
export const StyledQrScanner = styled(QrScanner)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`