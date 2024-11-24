export const formatCheckInTime = (isoDate: string | null): string => {
  if (!isoDate) return ''; // null 또는 빈 값 처리

  return (
    isoDate.slice(0, 10).replace(/-/g, '.') + // 날짜 부분 변환 (YYYY.MM.DD)
    ' ' +
    isoDate.slice(11, 16) // 시간 부분 추출 (HH:mm)
  );
};
