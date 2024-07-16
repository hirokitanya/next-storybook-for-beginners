import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Manhour from './manhour';

export default async function Page() {
  const manhour = await getManHour();
  manhour.data.forEach((data) => {
    data.startAt = dateFormatter(data.startAt);
    data.endAt = dateFormatter(data.endAt);
  });
  return <Manhour manhour={manhour} />;
}

async function getManHour() {
  const date =
    new Date().getFullYear().toString() +
    '-' +
    apiformatter((new Date().getMonth() + 1).toString()) +
    '-' +
    apiformatter(new Date().getDate().toString());
  return await api<ComponentProps<typeof Manhour>['manhour']>('aggregate/manhour/' + date);
}

function apiformatter(date: string) {
  if (date.length === 1) {
    return '0' + date;
  }
  return date;
}

function dateFormatter(date: string) {
  return date.replace(/-/g, '/');
}
