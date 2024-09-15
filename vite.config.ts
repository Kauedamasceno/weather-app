/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
    exclude: [
      '**/stories.tsx',
      '**/__snapshots__/**',
      '**/__tests__/__snapshots__/**',
      '**/__tests__/__mocks__/**',
      '**/node_modules/**',
      '**/*.stories.{ts,tsx}',
      "src/components/Logo/index.stories.ts"
    ],
    coverage : {
      exclude: ['**/__tests__/**', '**/node_modules/**', '**/index.stories.{ts,tsx}',"**/postcss.config.js", "**/tailwind.config.js", "**/vite.config.ts", "**/.storybook/**", "**/vite-env.d.ts", "**/main.tsx"],
  
    }
  },
});