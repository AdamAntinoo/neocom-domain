#!/usr/bin/env node
/**
 * After a successful internal `distribute`, advance package.json.
 *
 * While the library is not published (or npm is unreachable): bump patch from the
 * local version — file: consumers do not constrain on registry semver.
 *
 * When npm has a published version: align to that publish, then bump patch so the
 * next internal (or publish) build is always above the registry.
 *
 * Never uses GitVersion. Git tags stay with version:tag after a real npm publish.
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

function latestNpmVersion() {
  try {
    const published = execSync('npm view neocom-domain version', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    if (!/^\d+\.\d+\.\d+/.test(published)) {
      return null;
    }
    return published;
  } catch {
    return null;
  }
}

const pkg = readPkg();
const previous = pkg.version;
const published = latestNpmVersion();

let base = previous;
if (published) {
  // Stay at least on the registry line before advancing for this distribute.
  const [pMaj, pMin, pPat] = published.split('.').map(Number);
  const [lMaj, lMin, lPat] = previous.split('.').map(Number);
  const localBehind =
    lMaj < pMaj ||
    (lMaj === pMaj && lMin < pMin) ||
    (lMaj === pMaj && lMin === pMin && lPat < pPat);
  if (localBehind) {
    base = published;
    console.log(`Aligned to npm publish ${published} before distribute bump`);
  }
} else {
  console.log('No npm publish found (or unreachable); bumping from local version');
}

const next = bumpPatch(base);
pkg.version = next;
writePkg(pkg);
console.log(`version after distribute: ${previous} → ${next}`);
