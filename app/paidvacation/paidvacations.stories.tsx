import { Meta, StoryObj } from '@storybook/react';

import Component from './paidvacation';

const meta = {
  title: 'paidvacation/paidvacation',
  component: Component,
  args: {
    paidvacation: {
      data: [
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
        {
          name: 'string',
          count: 0,
          aggregationPeriod: '2019-08-24',
        },
      ],
    },
    nowdate: {
      nowDate: new Date()
        .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .replace(/\//g, '-'),
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

export const PaidVacation: StoryObj<typeof meta> = {};
