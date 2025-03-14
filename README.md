# Web Components Demo

A simple demonstration using ES modules with import maps for development and esbuild for production builds.

## Project Structure

- `index.html` - Main HTML file with import map configuration
- `main.js` - JavaScript module with date formatting functionality
- `tools/generate_importmap.php` - PHP tool to sync import map from package.json
- `tools/build.js` - esbuild production build script

## Development

This project can be run directly in the browser using import maps. No build step is required for development.

### Running in Development

Using PHP (automatically generates import map):
```bash
php -S localhost:8000
```

Or using Python (with static import map):
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Production Build

For production, we use esbuild to create optimized builds. This will:
- Bundle all dependencies
- Tree-shake unused code
- Create optimized assets
- Remove the need for import maps

### Building for Production

1. Install dependencies:
```bash
npm install
```

2. Create production build:
```bash
npm run build
```

3. Serve the production build:
```bash
cd dist
python -m http.server 8000
```

Then visit `http://localhost:8000` to see the optimized production version.

## Dependencies

Development (via import maps):
- Day.js v1.10.7 (from Skypack CDN)

Production (handled by esbuild):
- Dependencies are bundled from npm packages
- No runtime CDN dependencies
- Optimized and minified output

## Browser Support

- Development: Browsers with import map support (all modern browsers)
- Production: All modern browsers (IE11 not supported)

## Notes

- Development uses import maps for direct in-browser module loading
- Production builds use esbuild for optimization
- PHP development server provides automatic import map generation
- Tree-shaking ensures minimal bundle size 