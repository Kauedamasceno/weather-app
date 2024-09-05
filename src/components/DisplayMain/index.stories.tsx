import type { Meta, StoryObj } from '@storybook/react';
import DisplayMain  from '../DisplayMain/index';
import { AppContext } from '../../Context/SearchContext';

const meta = {
  title: 'Main Display',
  component: DisplayMain,
  decorators: [
    (Story) => (
      <AppContext>
        <Story />
      </AppContext>
    )
  ]
} satisfies Meta<typeof DisplayMain>

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