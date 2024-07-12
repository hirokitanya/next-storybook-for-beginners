import { Meta, StoryObj } from '@storybook/react';

import Component from './board';

const meta = {
  title: 'holiday/board',
  component: Component,
  args: {
    holiday: {
      data: [
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: true,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: false,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: true,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: false,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: true,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: false,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: true,
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          date: '2019-08-24',
          name: 'string',
          isNationalHoliday: false,
        },
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

export const Board: StoryObj<typeof meta> = {};
