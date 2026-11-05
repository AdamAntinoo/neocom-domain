#!/usr/bin/env node
/**
 * After a successful local distribute (test + build), advance package.json with
 * `npm version patch` semantics. Aligns to npm first when local is behind.
 * Never uses GitVersion — npm / package.json are the source of truth.
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkgPath = join(root, 'package.json');

function readPkg() {
  return JSON.parse(readFileSync(pkgPath, 'utf8'));
}

function writePkg(pkg) {
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
}

function npmViewVersion() {
  try {
    const published = execSync('npm view neocom-domain version', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    return /^\d+\.\d+\.\d+/.test(published) ? published : null;
  } catch {
    return null;
  }
}

function cmpSemver(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  return 0;
}

const pkg = readPkg();
const previous = pkg.version;
const published = npmViewVersion();

if (published && cmpSemver(previous, published) < 0) {
  pkg.version = published;
  writePkg(pkg);
  console.log(`Aligned to npm ${published} before patch bump`);
}

execSync('npm version patch --no-git-tag-version', {
  cwd: root,
  stdio: 'inherit',
});

const next = readPkg().version;
console.log(`version after distribute: ${previous} → ${next}`);
