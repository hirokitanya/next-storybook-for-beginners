import { Meta, StoryObj } from '@storybook/react';

import Component from './employee';

const meta = {
  title: 'employee/Employee',
  component: Component,
  args: {
    data: [
      {
        name: '八尋祐樹',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: 'サンプル',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
    ],
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

export const Employee: StoryObj<typeof meta> = {};
