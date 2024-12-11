import type { Meta, StoryObj } from "@storybook/react";
import Search from ".";

const meta = {
  title: "Search",
  component: Search,
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Second: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};
