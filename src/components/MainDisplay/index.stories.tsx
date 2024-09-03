import type { Meta, StoryObj } from '@storybook/react';

import { MainDisplay } from '.';


let search1 = 'oi'

const meta = {
  title: 'Main Display',
  component: MainDisplay,
  args: {
    children: search1
  }
} satisfies Meta<typeof MainDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'oo '
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const Second: Story = {
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}