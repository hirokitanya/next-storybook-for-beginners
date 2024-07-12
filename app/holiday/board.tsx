import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

import Holiday from './holiday';
import PublicHoliday from './publicholiday';
import { HolidayData } from './types';

export default function Board({ holiday }: Readonly<{ holiday: HolidayData }>) {
  const a: HolidayData = { data: [] };
  const b: HolidayData = { data: [] };
  for (let i = 0; i < holiday.data.length; i++) {
    if (holiday.data[i].isNationalHoliday) {
      a.data.push(holiday.data[i]);
    } else {
      b.data.push(holiday.data[i]);
    }
  }
  return (
    <div>
      <h2 className="text-center text-sky-800">カレンダー休日設定</h2>
      <div className="flex h-10">
        <Box className="">
          <FormControl className="">
            <Select className="w-[100px]" size="small">
              <MenuItem value={10}>2024年</MenuItem>
              <MenuItem value={20}>2025年</MenuItem>
              <MenuItem value={30}>2026年</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="outlined" className="ml-5 h-full">
          表示
        </Button>
        <Button variant="contained" className="ml-auto">
          休日を登録 +
        </Button>
      </div>
      <div className="mt-8">
        <div className="mb-5">
          {/* publicholiday  */}
          <PublicHoliday holiday={b} />
        </div>
        <div>
          {/* holiday  */}
          <Holiday holiday={a} />
        </div>
      </div>
    </div>
  );
}
