import fs from 'fs';
import { parse } from 'node-html-parser';

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf-8');
const root = parse(html);

// Find the import map
const importMapScript = root.querySelector('script[type="importmap"]');
const importMap = JSON.parse(importMapScript.textContent);

// Read existing package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// Initialize dependencies if they don't exist
packageJson.dependencies = packageJson.dependencies || {};

// Process each import map entry
for (const [key, value] of Object.entries(importMap.imports)) {
    // Extract version from URL
    const match = value.match(/@(\d+\.\d+\.\d+)/);
    if (match) {
        const version = match[1];
        packageJson.dependencies[key] = `^${version}`;
    }
}

// Write updated package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('Updated package.json with dependencies from import map'); 