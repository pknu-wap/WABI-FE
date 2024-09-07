import styled from 'styled-components';
export const Table = styled.table`
    border: 1px solid;
    border-collapse: separate;
    border-spacing: 0;
`;

export const TBody = styled.tbody`
    tr:last-child td {
        border-bottom: none;
    }
`

export const ThData = styled.th`
    padding: 10px;
    border-bottom: 1px solid;
`

export const ThBorder = styled(ThData)`
    border-left: 1px solid #AEB5BC;
`;

export const TdData = styled.td`
    padding: 10px;
    border-bottom: 1px solid #AEB5BC;

`

export const TdBorder = styled(TdData)`
    border-left: 1px solid #AEB5BC;
`
