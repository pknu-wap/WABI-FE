import styled, {css} from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Required = styled.span`
  color: #4e54f5;
  margin-left: 2px;
`;

export const Input = styled.input<{type: string}>`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #c1c7cd;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #c1c7cd;
  }

  ${({type}) =>
    type === 'number' &&
    css`
      text-align: left;
    `}

  ${({type}) =>
    type === 'datetime-local' &&
    css`
      /*추후 Todo*/
      /*datetime속성은 placeholder를 지원하지 않기에 색 지정이 어려움*/
      /*placeholder를 회색으로 하려면 새로운 props가 하나 더 필요함*/
    `};
`;
