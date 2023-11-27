import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin-top: px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background-color: white;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  

  background-color: #a6bcb8;
  border-radius: 10px;
`;

export const TableRow = styled.tr`
  text-align: center;
`;

export const TableHeadItem = styled.th`
  color: black;
  background-color: #a6bcb8;
  font-size: 24px;
  font-weight: 400;
  border: 2px solid;
  border-radius: 10%;
  padding: 3px 2px;
  border-color: white;
`;

export const TableBody = styled.tbody`
  font-size: 18px;
  text-align: center;
  
  padding: 8px 0;
`;

export const TableBodyTr = styled.tr`
  background-color: #a6bcb8;
`;

export const TableBodyItem = styled.td`
  
  padding: 8px 0;
`;