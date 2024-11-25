import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-body': {
    fontSize: 14,
    paddingLeft: 0
  },
}));

const rows = [
  { name: 'Electric Meter', data: 611003876454 },
  { name: 'Water Meter', data: 911343676454 },
  { name: 'Solar', data: 'LG Solar | 8 Panels' },
  { name: 'Water', data: 911343676454 },
  { name: 'Battery', data: 'LG Solar | 8 Panels' },
];

function BillDetails() {
  return (
    <TableContainer sx={{ mt: 2 }}>
      <Table aria-label="bill-details table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell><b>{row.name}</b></StyledTableCell>
              <StyledTableCell align="right">{row.data}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BillDetails;