import { Meta, StoryObj } from '@storybook/react';

import Component from './deposit';
import { LayoutRouter } from 'next/dist/server/app-render/entry-base';

const meta = {
  title: 'dashboard/Deposit',
  component: Component,
  args: {
    data: { amount: 3024.0, date: 'on 15 March, 2019' },
  },
  parameters: {
    Layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Deposit: StoryObj<typeof meta> = {};
