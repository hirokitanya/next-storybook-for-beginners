import { ComponentProps } from 'react';

import { api } from 'lib/api';

import DefaultAssign from './defaultassign';

export default async function Page() {
  const defaultassign = await getDefaultAssignData();
  const weekday = {
    data: [
      { dayofweek: '日曜' },
      { dayofweek: '月曜' },
      { dayofweek: '火曜' },
      { dayofweek: '水曜' },
      { dayofweek: '木曜' },
      { dayofweek: '金曜' },
      { dayofweek: '土曜' },
      { dayofweek: '祝日' },
    ],
  };
  return <DefaultAssign defaultassign={defaultassign} weekday={weekday} />;
}

async function getDefaultAssignData() {
  return await api<ComponentProps<typeof DefaultAssign>['defaultassign']>('setting/defaultassign');
}
