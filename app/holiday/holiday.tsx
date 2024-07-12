import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import * as React from 'react';

import { HolidayData } from './types';

export default function Holiday({ holiday }: Readonly<{ holiday: HolidayData }>) {
  let horidaytype;
  if (holiday.data[0].isNationalHoliday) {
    horidaytype = '祝日';
  } else {
    horidaytype = '公休';
  }
  return (
    <div className="grid w-full grid-cols-4">
      <Typography component="h2" variant="h6" gutterBottom className="font-bold">
        {horidaytype}
      </Typography>
      <TableContainer component={Paper} className="col-span-3 px-5 py-3">
        <div className="p-4">
          <Table aria-label="a dense table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="w-1/3 font-bold text-sky-800">
                  日付
                </TableCell>
                <TableCell align="left" className="w-1/3 font-bold text-sky-800">
                  休日名
                </TableCell>
                <TableCell className="w-1/3"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {holiday.data.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined">編集</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
