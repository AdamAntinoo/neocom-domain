#!/usr/bin/env node
/**
 * Ensure package.json version is not already on npm before publish.
 * Aligns up to the registry when local is behind, then bumps patch until unique.
 * Source of truth is npm — never GitVersion.
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

function bumpPatch(version) {
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(version);
  if (!m) {
    throw new Error(`Expected X.Y.Z, got: ${version}`);
  }
  return `${m[1]}.${m[2]}.${Number(m[3]) + 1}`;
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

function versionExistsOnNpm(version) {
  try {
    execSync(`npm view neocom-domain@${version} version`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return true;
  } catch {
    return false;
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
  console.log(`Aligned local version to npm: ${previous} → ${published}`);
}

let current = readPkg().version;
let guard = 0;
while (versionExistsOnNpm(current)) {
  const next = bumpPatch(current);
  const updated = readPkg();
  updated.version = next;
  writePkg(updated);
  console.log(`Version ${current} already on npm; bump patch → ${next}`);
  current = next;
  guard += 1;
  if (guard > 50) {
    throw new Error('Could not find a free patch version after 50 bumps');
  }
}

if (current === previous) {
  console.log(`Publishable version ready: ${current}`);
} else {
  console.log(`Publishable version ready: ${previous} → ${current}`);
}
