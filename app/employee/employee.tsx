'use client';

import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import { EmployeeData } from './types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="p-6">{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Employee({ data }: Readonly<EmployeeData>) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography component="h2" variant="h3" color="primary" gutterBottom className="text-center text-2xl font-bold">
        社員・協力会社
      </Typography>
      <Box className="w-full">
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="社員一覧" {...a11yProps(0)} />
            <Tab label="協力会社一覧" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <div className="relative p-4">
              <Button variant="contained" className="absolute right-0 mr-4">
                社員を登録 +
              </Button>
              <Table size="small" aria-label="a dense table" className="min-w-150 mt-10">
                <TableHead color="primary">
                  <TableRow>
                    <TableCell align="left" className="font-bold text-sky-800">
                      社員名
                    </TableCell>
                    <TableCell align="left" className="font-bold text-sky-800">
                      メールアドレス
                    </TableCell>
                    <TableCell align="left" className="font-bold text-sky-800">
                      電話番号
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        <div className="flex items-center">
                          <Avatar className="ring-3 h-6 w-6 bg-red-500 outline outline-1 outline-offset-4 outline-gray-200">
                            {row.name.charAt(0)}
                          </Avatar>
                          <p className="my-0 ml-3">{row.name}</p>
                        </div>
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.telNumber}</TableCell>
                      <TableCell align="right">
                        <Button variant="outlined">編集</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          実装なし
        </CustomTabPanel>
      </Box>
    </div>
  );
}
