# DayJS Demo

A simple demonstration of using DayJS with import maps in a vanilla JavaScript project.

## Project Structure

- `index.htm` - Main HTML file with import map configuration
- `main.js` - JavaScript module with date formatting functionality

## Running the Project

This project needs to be served from a web server due to module loading requirements. You can use any local development server, for example:

- Using Python:
  ```bash
  python -m http.server 8000
  ```

- Using Node.js (with `http-server`):
  ```bash
  npx http-server
  ```

Then visit `http://localhost:8000` in your browser.

## Features

- Uses import maps for module resolution
- Demonstrates ES modules usage
- Shows date formatting with DayJS 