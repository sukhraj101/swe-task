import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

const columns = [
  { id: 'month', label: 'MONTH', minWidth: 170 },
  { id: 'average', label: 'AVERAGE POWER FACTOR (%)', minWidth: 170 },
  { id: 'penalty', label: 'PF INCENTIVE / PF PENALTY', minWidth: 170 },
];

const createData = (month, average, penalty) => ({ month, average, penalty });

const rows = [
  createData('India', 'IN', 1324171354),
  createData('China', 'CN', 1403500365),
  createData('Italy', 'IT', 60483973),
  createData('United States', 'US', 327167434),
  createData('Canada', 'CA', 37602103),
  createData('Australia', 'AU', 25475400),
  createData('Germany', 'DE', 83019200),
  createData('Ireland', 'IE', 4857000),
  createData('Mexico', 'MX', 126577691),
  createData('Japan', 'JP', 126317000),
  createData('France', 'FR', 67022000),
  createData('United Kingdom', 'GB', 67545757),
  createData('Russia', 'RU', 146793744),
  createData('Nigeria', 'NG', 200962417),
  createData('Brazil', 'BR', 210147125),
];

function BillTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (event, newPage) => setPage(newPage);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
              <TableRow hover key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {row[column.id] ?? ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Paper>
  );
}

export default BillTable;
