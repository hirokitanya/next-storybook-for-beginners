import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import * as React from 'react';

import { ManHourData } from './types';

export default function Holiday({ manhour }: Readonly<{ manhour: ManHourData }>) {
  const nowyear = new Date().getFullYear();
  const yearlist = [];
  for (let i = 0; i < 4; i++) {
    yearlist.push(nowyear + i);
  }
  const monthlist = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-sky-800">工数集計</h2>
      <div className="flex h-10">
        <Box className="">
          <FormControl className="">
            <Select className="w-[100px]" size="small">
              {yearlist.map((data) => (
                <MenuItem key={data} value={data.toString()}>
                  {data}年
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="ml-5">
          <FormControl className="">
            <Select className="w-[100px]" size="small">
              {monthlist.map((data) => (
                <MenuItem key={data} value={data.toString()}>
                  {data}月
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button variant="outlined" className="ml-5 h-full">
          表示
        </Button>
      </div>
      <TableContainer component={Paper} className="mt-3 px-5 py-3">
        <Table aria-label="a dense table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="w-1/2 font-bold text-sky-800">
                現場名
              </TableCell>
              <TableCell align="left" className="w-1/8 font-bold text-sky-800">
                現場開始日時
              </TableCell>
              <TableCell align="left" className="w-1/8 font-bold text-sky-800">
                現場終了日時
              </TableCell>
              <TableCell align="left" className="w-1/8 font-bold text-sky-800">
                対象月の工数
              </TableCell>
              <TableCell align="left" className="w-1/8 font-bold text-sky-800">
                総工数
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="mt-5">
            {manhour.data.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="left">{row.startAt}</TableCell>
                <TableCell align="left">{row.endAt}</TableCell>
                <TableCell align="left">{row.manHour}</TableCell>
                <TableCell align="left">{row.totalManHour}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
