import styled from 'styled-components';
export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 70vw;
  background-color: #ffffff;
  border-radius: 10px;
  color: #697077;
  text-align: center;
  margin-bottom: 10px;
`;

export const TBody = styled.tbody`
  tr:last-child td {
    //border-bottom: none;
  }
`;

export const ThData = styled.th`
  padding: 15px;
`;

export const ThBorder = styled(ThData)`
  border-left: 1px solid #c1c7cd;
`;

export const TdData = styled.td`
  padding: 15px;
  border-top: 1px solid #c1c7cd;
`;

export const TdBorder = styled(TdData)`
  border-left: 1px solid #c1c7cd;
`;
