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
        集計期間 : {date.data.startdate} ~ {date.data.enddate}
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
