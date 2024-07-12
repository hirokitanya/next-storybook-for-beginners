import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Employee from './employee';

export default async function Page() {
  const employee = await getEmployeeData();
  const partner = await getPartnerData();
  return <Employee employee={employee} partner={partner} />;
}

/**
 * 従業員情報の取得
 */
async function getEmployeeData() {
  return await api<ComponentProps<typeof Employee>['employee']>('employee');
}
/**
 * 協力会社情報の取得
 */
async function getPartnerData() {
  return await api<ComponentProps<typeof Employee>['partner']>('partner');
}
