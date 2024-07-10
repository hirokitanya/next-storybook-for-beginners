import { Meta, StoryObj } from '@storybook/react';

import Component from './nightshift';

const meta = {
  title: 'nightshift/NightShift',
  component: Component,
  args: {
    props: {
      data: [
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
        {
          name: '八尋祐樹',
          count: 1,
        },
      ],
    },
    date: {
      data: [{ date: '2022/01/01' }, { date: '2022/02/10' }],
    },
  },
  parameters: {
    Layout: 'centerd',
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

export const NightShift: StoryObj<typeof meta> = {};
