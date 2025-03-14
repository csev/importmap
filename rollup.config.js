import html from '@rollup/plugin-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    html({
      // Will generate clean HTML without import maps
      template: ({ files }) => `
        <!DOCTYPE html>
        <html>
          <head>
            <title>My App</title>
          </head>
          <body>
            <h1>Hello World</h1>
            ${files.js.map(({ fileName }) => 
              `<script type="module" src="${fileName}"></script>`
            ).join('\n')}
          </body>
        </html>
      `
    })
  ]
}; 