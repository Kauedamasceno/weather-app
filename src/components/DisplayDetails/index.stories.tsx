import type { Meta, StoryObj } from "@storybook/react";
import DisplayDetails from ".";

const meta = {
  title: "Display Details",
  component: DisplayDetails,
} satisfies Meta<typeof DisplayDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Second: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};
