#!/usr/bin/env node
/**
 * Source of truth for neocom-domain package version is the latest npm publish.
 * Git tags follow npm after publish (see version-tag-from-package.mjs).
 * Do not drive package.json from GitVersion / GitHub.
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkgPath = join(root, 'package.json');

const published = execSync('npm view neocom-domain version', {
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
}).trim();

if (!/^\d+\.\d+\.\d+/.test(published)) {
  console.error(`Could not read a semver from npm view neocom-domain version (got: ${published})`);
  process.exit(1);
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
