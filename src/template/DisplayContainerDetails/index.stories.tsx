import type { Meta, StoryObj } from '@storybook/react';

import DisplayContainerDetails from '.';

const meta = {
  title: "Template Display Container Details",
  component: DisplayContainerDetails
} satisfies Meta<typeof DisplayContainerDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}