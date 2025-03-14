# Web Components Demo

A simple demonstration using Lit Elements with import maps for development and Vite for production builds.

## Project Structure

- `index.html` - Main HTML file with import map configuration
- `components/my-element.js` - Lit Element component
- `main.js` - JavaScript module with date formatting functionality
- `tools/generate-package-json.js` - Tool to sync import map dependencies with package.json

## Development

This project can be run directly in the browser using import maps. No build step is required for development.

### Running in Development

You can use any local development server. For example:

Using Python:
```bash
python -m http.server 8000
```

Using Node.js (with `http-server`):
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Production Build

For production, we use Vite to create optimized builds. This will:
- Bundle all dependencies
- Tree-shake unused code
- Create optimized assets
- Remove the need for import maps

### Syncing Dependencies

Before building for production, you need to sync your import map dependencies with package.json:

1. Install the HTML parser:
```bash
npm install node-html-parser
```

2. Run the sync tool:
```bash
node tools/generate-package-json.js
```

This tool:
- Reads the import map from index.html
- Extracts package versions from CDN URLs
- Updates package.json dependencies
- Preserves existing package.json content

### Setting up Vite

1. Install Node.js if you haven't already
2. After syncing dependencies, install them:
```bash
npm install
```

3. Add these scripts to your package.json:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Building for Production

1. Create production build:
```bash
npm run build
```
This will:
- Automatically sync import map dependencies to package.json
- Install any new dependencies
- Create an optimized production build in the `dist/` directory

2. Serve the production build:

Using Python:
```bash
cd dist
python -m http.server 8000
```

Using Node.js (with `http-server`):
```bash
cd dist
npx http-server
```

Then visit `http://localhost:8000` in your browser to see the optimized production version.

Note: The production build:
- Has all dependencies bundled (no CDN usage)
- Removes the import map (not needed in production)
- Is optimized and minified
- Should be served from the `dist` directory

## Dependencies

Development (via import maps):
- Lit v2.8.0 (from Skypack CDN)
- Day.js v1.10.7 (from Skypack CDN)

Production (handled by Vite):
- Dependencies are automatically synced from import map
- Bundled from npm packages
- No runtime CDN dependencies
- Optimized and minified output

## Browser Support

- Development: Browsers with import map support (all modern browsers)
- Production: All modern browsers (IE11 not supported)

## Notes

- Development uses import maps for direct in-browser module loading
- Production builds use Vite for optimization
- Dependencies are synced between import maps and package.json
- No framework dependencies (Vue, React, etc.)
- Web Components built with Lit
- Tree-shaking ensures minimal bundle size 