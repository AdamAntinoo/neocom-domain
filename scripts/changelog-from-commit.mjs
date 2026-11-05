#!/usr/bin/env node
/**
 * Prepend a CHANGELOG.md entry for the version about to be published, using the
 * triggering git commit message (npm publication changelog).
 *
 * Usage:
 *   COMMIT_MESSAGE='feat: …' node scripts/changelog-from-commit.mjs
 *   node scripts/changelog-from-commit.mjs 'feat: …'
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const version = pkg.version;
const changelogPath = join(root, 'CHANGELOG.md');

const rawMessage =
  process.argv.slice(2).join(' ').trim() ||
  (process.env.COMMIT_MESSAGE || '').trim();

if (!rawMessage) {
  console.error('changelog-from-commit: missing COMMIT_MESSAGE or argv message');
  process.exit(1);
}

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error(`changelog-from-commit: invalid package version ${version}`);
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const lines = rawMessage
  .split(/\r?\n/)
  .map((l) => l.trimEnd())
  .filter((l) => l.length > 0)
  .map((l) => (l.startsWith('- ') ? l : `- ${l}`));

const entry = `## ${version} — ${date}\n\n${lines.join('\n')}\n`;

let existing = '';
if (existsSync(changelogPath)) {
  existing = readFileSync(changelogPath, 'utf8');
}

const header = '# Changelog\n\nAll notable `neocom-domain` npm publishes. Each release entry includes the git commit message that triggered the publish.\n';

let body = existing;
if (body.startsWith('# Changelog')) {
  const idx = body.indexOf('\n## ');
  body = idx >= 0 ? body.slice(idx + 1) : '';
} else if (!body.trim()) {
  body = '';
}

// Avoid duplicate heading for the same version at the top
if (body.startsWith(`## ${version}`)) {
  console.log(`CHANGELOG.md already has an entry for ${version}; replacing top entry`);
  const next = body.indexOf('\n## ', 3);
  body = next >= 0 ? body.slice(next + 1) : '';
}

const nextFile = `${header}\n${entry}\n${body}`.replace(/\n{3,}/g, '\n\n');
writeFileSync(changelogPath, nextFile.endsWith('\n') ? nextFile : `${nextFile}\n`);
console.log(`CHANGELOG.md: recorded ${version} from commit message`);
