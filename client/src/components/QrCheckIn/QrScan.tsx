import React, {useState} from 'react';
import QrScanner from 'react-qr-scanner';
import {sendToServer} from '../../api/sendToServer';
import {studentQr} from '../../types/QrType/StudentQr';
import {scanData} from '../../types/QrType/ScanData';
import * as Styled from './qrCode.styles';

const Student: studentQr = {
  studentId: '',
  eventId: 8,
};

const handleError = (err: Error) => {
  console.error(err);
};

interface QrScanProps {
  onScanResult: (
    message: string,
    messageColor: string,
    qrColor: string,
  ) => void;
  eventId: string;
}

const QrScan = ({onScanResult, eventId}: QrScanProps) => {
  const [scanned, setQrScanned] = useState(false);
  const [nextScanned, setNextScanned] = useState(0);

  const handleScan = (data: scanData) => {
    if (data && !scanned) {
      const ScannedQrArray = data.text;
      const studentIdStartPoint = 8;
      const studentIdEndPoint = 17;
      const ExtractedStudentId = ScannedQrArray.substring(
        studentIdStartPoint,
        studentIdEndPoint,
      );
      Student.studentId = ExtractedStudentId;
      Student.eventId = parseInt(eventId, 10);

      sendToServer(Student)
        .then(res => {
          if (res.data.message === 'OK') {
            onScanResult('정상적으로 참석되었습니다.', '#4E54F5', '#4E54F5');
          }
          setQrScanned(true);
        })
        .catch(error => {
          // 임시로 에러코드 활용하여 동작
          // 추후 백엔드 코드로 동작 예정
          if (error.response.status === 500) {
            onScanResult('이미 참석되었습니다.', '#F5C400', '#F5C400');
          } else {
            onScanResult('이벤트 해당그룹이 아닙니다.', '#FF7078', '#FF7078');
          }
        });

      setTimeout(() => {
        setQrScanned(false);
        onScanResult(
          'QR CODE를 화면의 사각형 안에 맞춰주세요.',
          'black',
          'lightgray',
        );
        setNextScanned(prevKey => prevKey + 1);
      }, 1000);
    }
  };

  return (
    <div>
      <Styled.QrCameraReveral>
        <Styled.QrScannerContainer>
          <Styled.StyledQrScanner>
            <QrScanner
              key={nextScanned}
              onScan={handleScan}
              onError={handleError}
            />
          </Styled.StyledQrScanner>
        </Styled.QrScannerContainer>
      </Styled.QrCameraReveral>
    </div>
  );
};

export default QrScan;
