import { ComponentProps } from 'react';

import { api } from 'lib/api';

import NightShift from './nightshift';

export default async function Page() {
  const props = await getNightShiftData();
  const date = await getDate();
  return <NightShift props={props} date={date} />;
}

async function getNightShiftData() {
  return await api<ComponentProps<typeof NightShift>['props']>('aggregate/nightshift');
}

async function getDate() {
  return await Promise.resolve({
    data: [
      {
        date: new Date().toLocaleDateString(),
      },
      {
        date: getPastDate().toLocaleDateString(),
      },
    ],
  });
}

function getPastDate() {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
}
