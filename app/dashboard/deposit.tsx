import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
// import './deposit.css';

import { DepositData } from './types';
export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Card sx={{ minWidth: 275, minHeight: 192 }} className="relative mx-5 h-48 p-2">
      <CardContent>
        <Typography component="h2" color="primary" gutterBottom className="font-bold">
          Resent Deposit
        </Typography>
        <Typography variant="h4" component="div" className="font-bold">
          ${data.amount.toLocaleString()}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.date}
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

// function getAfterPoint(num:string){

// 	var arr = num.split('.');

// 	if (arr[1]){
// 		return '.' + arr[1];
// 	}
// }
