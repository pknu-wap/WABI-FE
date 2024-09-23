import styled from 'styled-components';
export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const TBody = styled.tbody`
  tr:last-child td {
    border-bottom: none;
  }
`;

export const ThData = styled.th`
  padding: 10px;
  border-bottom: 1px solid;
`;

export const ThBorder = styled(ThData)`
  border-left: 1px solid #aeb5bc;
`;

export const TdData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #aeb5bc;
`;

export const TdBorder = styled(TdData)`
  border-left: 1px solid #aeb5bc;
`;
