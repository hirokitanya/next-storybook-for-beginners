import { Box, Button, FormControl, MenuItem, Select } from '@mui/material';
import * as React from 'react';

import Holiday from './holiday';
import { HolidayData } from './types';

export default function Board({ holiday }: Readonly<{ holiday: HolidayData }>) {
  const newHoliday: HolidayData = { data: [] };
  const newPublicHoliday: HolidayData = { data: [] };
  for (let i = 0; i < holiday.data.length; i++) {
    if (holiday.data[i].isNationalHoliday) {
      newHoliday.data.push(holiday.data[i]);
    } else {
      newPublicHoliday.data.push(holiday.data[i]);
    }
  }
  const nowyear = new Date().getFullYear();
  const yearlist = [];
  for (let i = 0; i < 4; i++) {
    yearlist.push(nowyear + i);
  }
  return (
    <div>
      <h2 className="text-center text-sky-800">カレンダー休日設定</h2>
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
          <Holiday holiday={newPublicHoliday} />
        </div>
        <div>
          {/* holiday  */}
          <Holiday holiday={newHoliday} />
        </div>
      </div>
    </div>
  );
}
