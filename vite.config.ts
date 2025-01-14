/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        'src/models/**/*.ts',
        'vite.config.ts',
        'eslint.config.js',
        '.eslintrc.cjs',
        'src/utils/constants.ts',
      ]
    }
  },
});
