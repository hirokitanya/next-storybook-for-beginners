import { Meta, StoryObj } from '@storybook/react';

import Component from './employee';

const meta = {
  title: 'employee/Employee',
  component: Component,
  args: {
    employee: {
      data: [
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          email: 'user@example.com',
          phone: '080-0808-0808',
          initial: 's',
          hiredDate: '2019-08-24',
          color: '#ffffff',
          isCalendarVisible: true,
          role: 'admin',
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          email: 'user@example.com',
          phone: '080-0808-0808',
          initial: 's',
          hiredDate: '2019-08-24',
          color: '#ffffff',
          isCalendarVisible: true,
          role: 'admin',
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          email: 'user@example.com',
          phone: '080-0808-0808',
          initial: 's',
          hiredDate: '2019-08-24',
          color: '#ffffff',
          isCalendarVisible: true,
          role: 'admin',
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          email: 'user@example.com',
          phone: '080-0808-0808',
          initial: 's',
          hiredDate: '2019-08-24',
          color: '#ffffff',
          isCalendarVisible: true,
          role: 'admin',
        },
      ],
    },
    partner: {
      data: [
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          initial: 's',
          phone: '080-0808-0808',
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          initial: 's',
          phone: '080-0808-0808',
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          initial: 's',
          phone: '080-0808-0808',
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          name: 'string',
          initial: 's',
          phone: '080-0808-0808',
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

export const Employee: StoryObj<typeof meta> = {};
