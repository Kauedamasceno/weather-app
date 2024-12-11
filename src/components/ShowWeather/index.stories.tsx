import type { Meta, StoryObj } from "@storybook/react";

import ShowWeather from ".";
import { AppContext } from "../../Context/SearchContext";

const meta = {
  title: "ShowWeather",
  component: ShowWeather,
  decorators: [
    (Story) => (
      <AppContext>
        <Story />
      </AppContext>
    ),
  ],
} satisfies Meta<typeof ShowWeather>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
