'use client';

import {
  Avatar,
  Box,
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import * as React from 'react';

import { EmployeeData, PartnerData } from './types';

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

export default function Employee({ employee, partner }: Readonly<{ employee: EmployeeData; partner: PartnerData }>) {
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
                <TableHead>
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
                  {employee.data.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        <div className="flex items-center">
                          <Avatar className="ring-3 h-6 w-6 bg-red-500 outline outline-1 outline-offset-4 outline-gray-200">
                            {row.initial}
                          </Avatar>
                          <p className="ml-3">{row.name}</p>
                        </div>
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
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
          <TableContainer component={Paper}>
            <div className="relative p-4">
              <Button variant="contained" className="absolute right-0 mr-4">
                協力会社を登録 +
              </Button>
              <Table size="small" aria-label="a dense table" className="min-w-150 mt-10">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" className="w-1/2 font-bold text-sky-800">
                      協力会社名
                    </TableCell>
                    <TableCell align="left" className="w-1/2 font-bold text-sky-800">
                      電話番号
                    </TableCell>
                    <TableCell className="w-1/3"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {partner.data.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        <div className="flex items-center">
                          <Avatar
                            className="h-5 w-7 rounded-full bg-white font-thin text-black outline outline-2 outline-gray-200"
                            variant="square"
                          >
                            {row.initial}
                          </Avatar>
                          <p className="ml-3">{row.name}</p>
                        </div>
                      </TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
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
      </Box>
    </div>
  );
}
