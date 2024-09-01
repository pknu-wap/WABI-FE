import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import {SendToServer} from "../../api/SendToServer";
import {studentQr} from "../../types/QrType/StudentQr";
import {scanData} from "../../types/QrType/ScanData";
import {LoadCheckInStudent} from "../../api/LoadCheckInStudent";

const Student: studentQr = {
    studentId: "",
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
            const ExtractedStudentId = ScannedQrArray.substring(8,17);
            Student.studentId = ExtractedStudentId;
            SendToServer(Student);

            LoadCheckInStudent()

            setQrScanned(true);

            setTimeout(() => {
                setQrScanned(false);
            }, 1000);
        }
    };

    return (
        <div>
            <QrScanner
                onError={handleError}
                onScan={handleScan}
            />
        </div>


    );
}

export default QrScan;
