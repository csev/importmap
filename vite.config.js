import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Will read your import maps and bundle accordingly
    modulePreload: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  resolve: {
    // Help Vite find the dependencies
    mainFields: ['module', 'browser', 'main']
  }
}); 