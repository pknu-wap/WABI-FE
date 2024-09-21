import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  border-bottom: 2px solid #5a67d8;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{isActive: boolean}>`
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  background-color: ${({isActive}) => (isActive ? '#4E54F5' : '#fff')};
  color: ${({isActive}) => (isActive ? '#fff' : '#4E54F5')};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:first-child {
    margin-left: 60px;
  }
  /* 두 번째 버튼부터 여백 적용 */
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
