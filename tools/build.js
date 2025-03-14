import * as esbuild from 'esbuild';
import fs from 'fs';

// Build the JS
await esbuild.build({
  entryPoints: ['main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  outdir: 'dist',
  loader: { '.js': 'js' }
});

// Copy and clean index.html
const html = fs.readFileSync('index.html', 'utf-8');
const cleanHtml = html.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
fs.writeFileSync('dist/index.html', cleanHtml);

console.log('Build complete! Files written to dist/'); 