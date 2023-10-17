#!/usr/bin/env node

let ColorConverter = require('../src/index');
const color = process.argv[2];
const colorConverter = new ColorConverter(color);
colorConverter.displayColors();
