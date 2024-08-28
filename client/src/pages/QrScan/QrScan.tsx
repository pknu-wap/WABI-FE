import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

type scanData = {
    text: string;
} | null;

const handleError = (err: Error) => {
    console.error(err);
};

const QrScan = () => {

    const [scanned, setQrScanned] = useState(false);

    const handleScan = (data: scanData) => {
        if (data && !scanned) {
            const dataArray = data.text; 
            const str = dataArray.substring(8,17); 
            console.log(str); // 학번 콘솔출력
            
            setQrScanned(true); 

            setTimeout(() => {
                setQrScanned(false);
            }, 1000);
        }
    };

    return (
        <div className="App">
            <QrScanner
                onError={handleError}
                onScan={handleScan}
            />
        </div>
    );
}

export default QrScan;