import { Meta, StoryObj } from '@storybook/react';

import Component from './deposit';
import { LayoutRouter } from 'next/dist/server/app-render/entry-base';

const meta = {
  title: 'dashboard/Deposit',
  component: Component,
  args: {
    data: { amount: 3024.55, date: '2019-03-15' },
  },
  parameters: {
    Layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Deposit: StoryObj<typeof meta> = {};
