import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

import { NightShiftData, dateData } from './types';

export default function NightShift({ props, date }: Readonly<{ props: NightShiftData; date: dateData }>) {
  return (
    <div>
      <Typography component="h2" variant="h6" color="primary" gutterBottom className="text-center text-2xl font-bold">
        夜勤勤務集計
      </Typography>
      <Typography className="align-center mb-3 flex h-11 w-[1200px] items-center rounded bg-blue-100 pl-8">
        集計期間 : {formatandCompare(date.data[1].date, date.data[0].date)}
      </Typography>

      <TableContainer component={Paper} className="px-5 py-3">
        <div className="p-4">
          <Table size="small" aria-label="a dense table" className="min-w-150">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="font-bold text-sky-800">
                  社員名
                </TableCell>
                <TableCell align="left" className="font-bold text-sky-800">
                  夜勤勤務日数
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
function formatandCompare(date1: string, date2: string) {
  const newdate1 = new Date(date1);
  const newdate2 = new Date(date2);
  const format1 = date1.split('/');
  const format2 = date2.split('/');
  if (newdate1 > newdate2) {
    return (
      format2[0] +
      ' / ' +
      format2[1].padStart(2, '0') +
      ' / ' +
      format2[2].padStart(2, '0') +
      ' ~ ' +
      format1[0] +
      ' / ' +
      format1[1].padStart(2, '0') +
      ' / ' +
      format1[2].padStart(2, '0')
    );
  } else {
    return (
      format1[0] +
      ' / ' +
      format1[1].padStart(2, '0') +
      ' / ' +
      format1[2].padStart(2, '0') +
      ' ~ ' +
      format2[0].padStart(2, '0') +
      ' / ' +
      format2[1].padStart(2, '0') +
      ' / ' +
      format2[2].padStart(2, '0')
    );
  }
}
