import React, {useState} from 'react';
import QrScanner from 'react-qr-scanner';
import {SendToServer} from '../../api/SendToServer';
import {studentQr} from '../../types/QrType/StudentQr';
import {scanData} from '../../types/QrType/ScanData';
import {LoadCheckInStudent} from '../../api/LoadCheckInStudent';

const Student: studentQr = {
  studentId: '',
  eventId: 1,
};

const handleError = (err: Error) => {
  console.error(err);
};

const QrScan = () => {
  const [scanned, setQrScanned] = useState(false);

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
      }, 1000);
    }
  };

  return (
    <div>
      <QrScanner onError={handleError} onScan={handleScan} delay={300} />
    </div>
  );
};

export default QrScan;
