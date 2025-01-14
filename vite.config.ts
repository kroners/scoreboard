/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables Vitest globals like `expect`
    environment: 'jsdom', // Provides a DOM-like environment
    setupFiles: './setupTests.ts', // Load global configurations for tests
  },
});
