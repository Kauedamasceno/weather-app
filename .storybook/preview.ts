import '../src/index.css'; // replace with the name of your tailwind css file
import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

 backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'white',
        },
        {
          name: 'dark',
          value: 'black',
        },
      ],
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })]
};

export default preview;
