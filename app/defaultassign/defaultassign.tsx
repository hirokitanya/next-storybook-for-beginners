import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import * as React from 'react';

import Box from './box';
import { DayOfWeekDatas, DefaultAssignData } from './types';

export default function DefaultAssign({
  defaultassign,
  weekday,
}: Readonly<{ defaultassign: DefaultAssignData; weekday: DayOfWeekDatas }>) {
  return (
    <div className="min-w-full items-center">
      <h2 className="text-center font-bold text-sky-800">デフォルトアサイン設定</h2>
      <Card className="min-w-[1200] p-10">
        <CardContent>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h3 className="font-bold text-sky-800">休日/平日設定</h3>
              <div className="flex flex-wrap">
                {weekday.data.map((day) => (
                  <Box key={day.dayofweek} day={day} defaultassign={defaultassign} />
                ))}
              </div>
              <Typography>曜日をクリックすると平日と休日を切り替えることができます。</Typography>
              <Typography>休日として設定された曜日はデフォルトで休に配置されます。</Typography>
            </div>
            <div className="relative col-span-1">
              <h3 className="top-0 font-bold text-sky-800">平日アサイン先</h3>
              <div>
                <TextField
                  id=""
                  label="名称"
                  variant="outlined"
                  value={defaultassign.data.weekdayAssign}
                  className="mt-4 w-full"
                />
              </div>
              <Button variant="contained" className="absolute bottom-0 right-0">
                変更を保存
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
