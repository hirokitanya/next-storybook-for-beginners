import { Meta, StoryObj } from '@storybook/react';

import Component from './defaultassign';

const meta = {
  title: 'defaultassign/defaultassign',
  component: Component,
  args: {
    defaultassign: {
      data: {
        weekdayAssign: '工場',
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: false,
        friday: true,
        saturday: false,
        sunday: true,
        holiday: false,
      },
    },
    weekday: {
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
    },
  },
  parameters: {
    Layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1200px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const DefaultAssign: StoryObj<typeof meta> = {};
