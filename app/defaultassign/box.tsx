import { Box, Typography } from '@mui/material';
import * as React from 'react';

import { DayOfWeekData, DefaultAssignData } from './types';

export default function WeekDay({
  day,
  defaultassign,
}: Readonly<{ day: DayOfWeekData; defaultassign: DefaultAssignData }>) {
  if (
    (day.dayofweek == '月曜' && defaultassign.data.monday) ||
    (day.dayofweek == '火曜' && defaultassign.data.tuesday) ||
    (day.dayofweek == '水曜' && defaultassign.data.wednesday) ||
    (day.dayofweek == '木曜' && defaultassign.data.thursday) ||
    (day.dayofweek == '金曜' && defaultassign.data.friday) ||
    (day.dayofweek == '土曜' && defaultassign.data.saturday) ||
    (day.dayofweek == '日曜' && defaultassign.data.sunday) ||
    (day.dayofweek == '祝日' && defaultassign.data.holiday)
  ) {
    return (
      <div className="mb-2 mr-2 mt-2">
        <Typography className="text-center">{day.dayofweek}</Typography>
        <Box className="flex h-28 w-40 items-center justify-center rounded-lg border-2 border-solid border-gray-300 bg-gray-50">
          <Typography className="font-bold">平日</Typography>
        </Box>
      </div>
    );
  } else {
    return (
      <div className="mb-2 mr-2 mt-2">
        <Typography className="text-center text-red-500">{day.dayofweek}</Typography>
        <Box className="flex h-28 w-40 items-center justify-center rounded-lg border-2 border-solid border-red-300 bg-red-50">
          <Typography className="font-bold text-red-500">休日</Typography>
        </Box>
      </div>
    );
  }
}
