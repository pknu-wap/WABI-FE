import styled from 'styled-components';
import Button from 'components/common/Button/Button';

export const SaveButton = styled(Button)`
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &:hover {
    background-color: #4e54f5;
    color: #ffffff;
  }
`;
