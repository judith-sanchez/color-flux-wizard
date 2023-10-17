#!/usr/bin/env node

let ColorConverter = require('../src/index');
const color = process.argv[2];
const colorConverter = new ColorConverter(color);

// Clear the console before displaying the result of the current conversion
console.clear();

colorConverter.displayColors();
