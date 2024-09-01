import type { Meta, StoryObj } from '@storybook/react';

import { MainDisplay } from '.';

const meta = {
  title: 'Main Display',
  component: MainDisplay,
} satisfies Meta<typeof MainDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}