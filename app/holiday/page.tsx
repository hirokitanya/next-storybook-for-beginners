import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Board from './board';

export default async function Page() {
  const holiday = await getPublicHoliday();
  return <Board holiday={holiday} />;
}

async function getPublicHoliday() {
  const month = new Date().getMonth() + 1;
  return await api<ComponentProps<typeof Board>['holiday']>('setting/holiday?month=' + month);
}
