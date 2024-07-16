import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';

import { NowDateData, PaidVacationData } from './types';

export default function PaidVacation({
  paidvacation,
  nowdate,
}: Readonly<{ paidvacation: PaidVacationData; nowdate: NowDateData }>) {
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-sky-800">有給休暇集計</h2>
      <TableContainer component={Paper} className="mt-3 px-10 pb-10 pt-5">
        <Table aria-label="a dense table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="w-5/12 font-bold text-sky-800">
                社員名
              </TableCell>
              <TableCell align="left" className="w-6/12 font-bold text-sky-800">
                集計期間
              </TableCell>
              <TableCell align="left" className="min-w-32 font-bold text-sky-800">
                有給取得日数
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="mt-5">
            {paidvacation.data.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="left">
                  {row.aggregationPeriod} ~ {nowdate.nowDate}
                </TableCell>
                <TableCell align="left">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
