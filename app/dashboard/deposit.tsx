import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from 'next/link';

import { DepositData } from './types';
export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Card className="relative mx-5 h-48 min-h-48 min-w-64 p-2">
      <CardContent>
        <Typography component="h2" color="primary" gutterBottom className="font-bold">
          Resent Deposit
        </Typography>
        <Typography variant="h4" component="div" className="font-bold">
          ${getAfterPoint(data.amount.toLocaleString())}
        </Typography>
        <Typography color="text.secondary" className="leading-6">
          {changeDate(data.date)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="#" className="absolute bottom-2.5">
          View balance
        </Link>
      </CardActions>
    </Card>
  );
}

function getAfterPoint(num: string) {
  var arr = num.split('.');

  if (arr[1] == undefined) {
    return arr[0] + '.' + '00';
  } else {
    return num;
  }
}

function changeDate(date: string) {
  const month_english_list = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October.',
    'November',
    'December',
  ];
  var arr = date.split('-');
  var month = parseInt(arr[1]);
  var enMonth = month_english_list[month - 1];
  return 'on ' + arr[2] + ' ' + enMonth + ', ' + arr[0];
}
