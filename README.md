# Web Components Demo

A simple demonstration using Lit Elements with import maps for development and Vite for production builds.

## Project Structure

- `index.htm` - Main HTML file with import map configuration
- `components/my-element.js` - Lit Element component
- `main.js` - JavaScript module with date formatting functionality

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

### Setting up Vite

1. Install Node.js if you haven't already
2. Initialize the project and install Vite:
```bash
npm init -y
npm install --save-dev vite
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

2. Preview the production build:
```bash
npm run preview
```

The production build will be in the `dist/` directory.

## Dependencies

Development (via import maps):
- Lit v2.8.0 (from Skypack CDN)
- Day.js v1.10.7 (from Skypack CDN)

Production (handled by Vite):
- Dependencies are bundled from the same versions specified in the import map
- No runtime CDN dependencies
- Optimized and minified output

## Browser Support

- Development: Browsers with import map support (all modern browsers)
- Production: All modern browsers (IE11 not supported)

## Notes

- Development uses import maps for direct in-browser module loading
- Production builds use Vite for optimization
- No framework dependencies (Vue, React, etc.)
- Web Components built with Lit
- Tree-shaking ensures minimal bundle size 