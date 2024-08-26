import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QrScan = () => {

    type scanData = {
        text: string;
    } | null;

    const [scanned, setQrScanned] = useState(false);

    const handleScan = (data: scanData) => {
        if (data && !scanned) {
            setQrScanned(true); 

            setTimeout(() => {
                setQrScanned(false);
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