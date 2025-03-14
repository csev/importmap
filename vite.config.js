import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [{
    name: 'remove-importmap',
    transformIndexHtml(html) {
      // Remove the importmap script tag
      return html.replace(
        /<script type="importmap">[\s\S]*?<\/script>/i,
        ''
      );
    }
  }],
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