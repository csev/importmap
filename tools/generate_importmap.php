<?php
// Read package.json
$packageJson = json_decode(file_get_contents('package.json'), true);

// Get dependencies
$dependencies = $packageJson['dependencies'] ?? [];

// Create import map
$importMap = [
    'imports' => []
];

// Convert each dependency to a CDN URL
foreach ($dependencies as $package => $version) {
    // Remove ^ or ~ from version if present
    $version = ltrim($version, '^~');
    // Create Skypack URL
    $importMap['imports'][$package] = "https://cdn.skypack.dev/{$package}@{$version}";
}

// Output the complete script tag with import map
echo '<script type="importmap">';
echo json_encode($importMap, JSON_PRETTY_PRINT);
echo '</script>';
?> 