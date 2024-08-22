import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QrScan = () => {

    type scanData = {
        text: string;
    } | null;

    const [scanned, setScanned] = useState(false);

    const handleScan = (data: scanData) => {
        if (data && !scanned) {
            setScanned(true); // 한 번만 스캔 가능
            console.log(data.text);

            setTimeout(() => {
                setScanned(false); // Allow scanning again after 5 seconds
            }, 1000);
        }
    };

    const handleError = (err: Error) => {
        console.error(err);
    };

    return (
        <div className="App">
            <QrScanner
                delay={2000}
                onError={handleError}
                onScan={handleScan}
            />
        </div>
    );
}

export default QrScan;