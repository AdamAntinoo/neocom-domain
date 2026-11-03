#!/usr/bin/env node
/**
 * Align package.json to the latest npm publish when one exists.
 * Git tags follow npm after publish (see version-tag-from-package.mjs).
 * Do not drive package.json from GitVersion / GitHub.
 *
 * When the package is not on npm (or npm view fails), keep the local version —
 * internal file: consumers are not constrained by registry semver.
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkgPath = join(root, 'package.json');

let published;
try {
  published = execSync('npm view neocom-domain version', {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
} catch (err) {
  console.log(
    `version:sync: no npm publish available (${err?.message ?? 'npm view failed'}); keeping local package.json version`,
  );
  process.exit(0);
}

if (!/^\d+\.\d+\.\d+/.test(published)) {
  console.log(
    `version:sync: unexpected npm view result (${published}); keeping local package.json version`,
  );
  process.exit(0);
}

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const previous = pkg.version;
pkg.version = published;
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

if (previous === published) {
  console.log(`package.json version already matches npm: ${published}`);
} else {
  console.log(`Synced package.json version from npm: ${previous} → ${published}`);
}
