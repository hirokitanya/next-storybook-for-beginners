import { Meta, StoryObj } from '@storybook/react';

import Component from './manhour';

const meta = {
  title: 'manhour/manhour',
  component: Component,
  args: {
    manhour: {
      data: [
        {
          name: 'string',
          startAt: '2022-01-01'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
        {
          name: 'string',
          startAt: '2019-08-24'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
        {
          name: 'string',
          startAt: '2019-08-24'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
        {
          name: 'string',
          startAt: '2019-08-24'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
        {
          name: 'string',
          startAt: '2019-08-24'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
        {
          name: 'string',
          startAt: '2019-08-24'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
        {
          name: 'string',
          startAt: '2019-08-24'.replace(/-/g, '/'),
          endAt: '2019-08-24'.replace(/-/g, '/'),
          manHour: 0,
          totalManHour: 0,
        },
      ],
    },
  },

  parameters: {
    layout: 'centered',
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

export const ManHour: StoryObj<typeof meta> = {};
