import { Typography } from '@mui/material';
import { OrderData } from './types';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Link from 'next/link';

export default function Order({ data }: Readonly<OrderData>) {
  return (
    <TableContainer component={Paper}>
      <div className="p-4">
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Orders
        </Typography>
        <Table size="small" aria-label="a dense table" className="min-w-150">
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Ship To</TableCell>
              <TableCell align="left">Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {changedate(row.date)}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.shipTo}</TableCell>
                <TableCell align="left">{row.paymentMethod}</TableCell>
                <TableCell align="right">${row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link href={'#'}>See more orders</Link>
      </div>
    </TableContainer>
  );
}
function changedate(olddate: string) {
  let date = olddate.split(' ');
  return date[2] + ' ' + date[1] + ',' + date[3];
}
