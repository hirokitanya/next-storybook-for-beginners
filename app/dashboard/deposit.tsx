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
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Typography component="h2" color="primary" gutterBottom>
          Resent Deposit
        </Typography>
        <Typography variant="h4" component="div">
          ${data.amount.toFixed(2).toLocaleString()}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="#">View balance</Link>
      </CardActions>
    </Card>
  );
}
