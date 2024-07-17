import { Meta, StoryObj } from '@storybook/react';

import Component from './box';

const meta = {
  title: 'defaultassign/holiday',
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
        sunday: false,
        holiday: true,
      },
    },
    day: { dayofweek: '日曜' },
  },
  parameters: {
    Layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[168px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const HoliDay: StoryObj<typeof meta> = {};
