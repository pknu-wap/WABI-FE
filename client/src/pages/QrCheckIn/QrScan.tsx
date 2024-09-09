import React, {useState} from 'react';
import QrScanner from 'react-qr-scanner';
import {SendToServer} from '../../api/SendToServer';
import {studentQr} from '../../types/QrType/StudentQr';
import {scanData} from '../../types/QrType/ScanData';
import {LoadCheckInStudent} from '../../api/LoadCheckInStudent';
import * as Styled from './qrCode.styles';

const Student: studentQr = {
  studentId: '',
  eventId: 1,
};

const handleError = (err: Error) => {
  console.error(err);
};

const QrScan = () => {
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
      SendToServer(Student);

      LoadCheckInStudent();

      setQrScanned(true);

      setTimeout(() => {
        setQrScanned(false);
        setNextScanned(prevKey => prevKey + 1);
      }, 1000);

    }
  };


  return (
    <div>
      <Styled.QrCameraReveral>
        <QrScanner key={nextScanned} onScan={handleScan} onError={handleError} />
      </Styled.QrCameraReveral>
    </div>
  );
};

export default QrScan;
