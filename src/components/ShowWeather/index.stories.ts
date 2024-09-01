import type { Meta, StoryObj } from '@storybook/react';

import ShowWeather from '.';

const meta = {
  title: 'ShowWeather',
  component: ShowWeather,
} satisfies Meta <typeof ShowWeather>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  
}