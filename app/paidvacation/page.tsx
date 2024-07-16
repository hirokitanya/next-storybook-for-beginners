import { ComponentProps } from 'react';

import { api } from 'lib/api';

import PaidVacation from './paidvacation';

export default async function Page() {
  const paidvacation = await getPaidVacatonData();
  const date = await getDate();
  return <PaidVacation paidvacation={paidvacation} nowdate={date} />;
}

async function getPaidVacatonData() {
  return await api<ComponentProps<typeof PaidVacation>['paidvacation']>('aggregate/paidvacation');
}

async function getDate() {
  return await Promise.resolve({
    nowDate: new Date()
      .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .replace(/\//g, '-'),
  });
}
