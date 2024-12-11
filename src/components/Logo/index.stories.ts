import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta = {
  title: "Logo",
  component: Logo,
  argTypes: { nameLogo: String },
  args: { nameLogo: "Weather Kauê" },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
