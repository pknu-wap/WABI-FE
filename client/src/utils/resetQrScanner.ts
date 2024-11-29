const resetQrScanner = (
  setQrScanned: React.Dispatch<React.SetStateAction<boolean>>,
  onScanResult: (
    message: string,
    messageColor: string,
    qrColor: string,
  ) => void,
  setNextScanned: React.Dispatch<React.SetStateAction<number>>,
  delay: number = 1500,
) => {
  setTimeout(() => {
    setQrScanned(false);
    onScanResult(
      'QR CODE를 화면의 사각형 안에 맞춰주세요.',
      'black',
      'lightgray',
    );
    setNextScanned(prevKey => prevKey + 1);
  }, delay);
};

export default resetQrScanner;