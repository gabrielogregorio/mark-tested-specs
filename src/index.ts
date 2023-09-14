#!/usr/bin/env node
/* eslint-disable no-console */

import { processFile } from './processFile';

const [, , ...args] = process.argv;

const filePathDirIndex = args.indexOf('-d') + 1;
const filePathDir = args[filePathDirIndex]?.trim();

const pathFileSpecsIndex = args.indexOf('-s') + 1;
const pathFileSpecs = args[pathFileSpecsIndex]?.trim();

if (!filePathDir) {
  console.error('Please specify a path where your files are, example -d ./src/');
  process.exit(1);
}

if (!pathFileSpecs) {
  console.error('Please specify a spec path -s ./README.md');
  process.exit(1);
}

processFile(filePathDir, pathFileSpecs);
