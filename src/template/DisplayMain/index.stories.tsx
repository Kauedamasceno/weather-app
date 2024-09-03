import type { Meta, StoryObj } from '@storybook/react';

import DisplayMain from '.';

const meta = {
  title: "Template Dispaly Main",
  component: DisplayMain
} satisfies Meta<typeof DisplayMain>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}