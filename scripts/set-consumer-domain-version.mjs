#!/usr/bin/env node
/**
 * Set neocom-domain dependency in a consumer package.json to an exact npm version
 * (replaces file: links or older ranges). Used by GitHub Actions after publish.
 *
 * Usage: node scripts/set-consumer-domain-version.mjs <consumer-package.json> <version>
 */
import { readFileSync, writeFileSync } from 'node:fs';

const [, , pkgPath, version] = process.argv;
if (!pkgPath || !version || !/^\d+\.\d+\.\d+$/.test(version)) {
  console.error('Usage: set-consumer-domain-version.mjs <package.json> <X.Y.Z>');
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const sections = ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies'];
let found = false;
for (const section of sections) {
  if (pkg[section] && Object.prototype.hasOwnProperty.call(pkg[section], 'neocom-domain')) {
    const previous = pkg[section]['neocom-domain'];
    pkg[section]['neocom-domain'] = version;
    found = true;
    console.log(`${section}.neocom-domain: ${previous} → ${version}`);
  }
}

if (!found) {
  if (!pkg.dependencies) pkg.dependencies = {};
  pkg.dependencies['neocom-domain'] = version;
  console.log(`dependencies.neocom-domain: (added) → ${version}`);
}

writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
