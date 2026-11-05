#!/usr/bin/env node
/**
 * After a successful npm publish, create an annotated git tag vX.Y.Z matching
 * package.json so git history stays aligned with npm. Does not push.
 */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const version = pkg.version;
const tag = `v${version}`;

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error(`package.json version is not X.Y.Z: ${version}`);
  process.exit(1);
}

const existing = execSync('git tag -l', { encoding: 'utf8', cwd: root })
  .split('\n')
  .map((t) => t.trim())
  .filter(Boolean);

if (existing.includes(tag)) {
  console.log(`Git tag ${tag} already exists (npm/git already aligned).`);
  process.exit(0);
}

const commitMessage = (process.env.COMMIT_MESSAGE || '').trim();
const tagMessage = commitMessage
  ? `npm neocom-domain@${version}\n\n${commitMessage}`
  : `npm neocom-domain@${version}`;

execSync(`git tag -a "${tag}" -m ${JSON.stringify(tagMessage)}`, {
  cwd: root,
  stdio: 'inherit',
});
console.log(`Created git tag ${tag} to match npm package version ${version}. Do not push unless asked.`);