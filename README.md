# neocom-domain

Node package of TypeScript classes for the NEOCOM business domain. Front and back depend on the **published npm** package (not a local `file:` link in CI).

**Published programme models** live under `src/domain/`. Consumers get updates by installing a new package version from npm.

```bash
nvm use
npm install
npm test
```

## Consumers (`neocom-domain` usage)

Inventory refreshed **2026-11-05** after `graphify update` on `neocom-front` and `neocom-back` (AST graphs under each repo’s `graphify-out/`). Symbols are those imported or re-exported from `'neocom-domain'` in `.ts` sources (excluding `node_modules`).

Current npm dependency pin (local checkouts): **`0.29.2`**.

### `neocom-front`

| Kind | Symbols from `neocom-domain` |
| --- | --- |
| Models | `ApplicationInfoV1`, `BlueprintV1`, `PilotV2`, `PublicPilotV1`, `ServerStatusV1` |
| Supporting types | `PilotNameSummary`, `PublicCorporationSummary` |

Typical use: header providers (`ApplicationInfoV1`, `ServerStatusV1`), pilot panels/renders (`PilotV2`, `PublicPilotV1`), and front `NeoCom` node wrappers that compose those models (`application-info-v1.node`, `blueprint-v1.node`, `pilot-v2.node`, `public-pilot-v1.node`, `server-status-v1.node`).

### `neocom-back`

| Kind | Symbols from `neocom-domain` |
| --- | --- |
| Models | `BlueprintV1`, `PilotV2`, `PublicPilotV1` |
| Supporting types | `PilotNameSummary`, `PublicCorporationSummary` |
| Ports / tokens | `PILOT_PORT`, `PilotPort`, `INDUSTRY_PORT`, `IndustryPort` |
| Errors / catalog | `NeocomBackendError`, `NeocomBackendErrorEntry`, `ExceptionCatalogEntry`, `ExceptionPayload`, `ExceptionPayloadBuilder`, `catalogEntry`, `exceptionPayload`, `isExceptionPayload` |

Typical use: hexagonal adapters and use cases (ESI pilot / industry), Nest exception filter re-exports, and exception catalog wiring under `infrastructure/adapters/exceptions`.

Re-scan after consumer changes:

```bash
cd ../neocom-front && python -m graphify update .
cd ../neocom-back  && python -m graphify update .
# then refresh the tables above from imports of 'neocom-domain'
```

## Version and publish (GitHub Actions + npm)

**Do not use GitVersion.** **Do not bump or publish from local git hooks.**  
`package.json` / the npm registry are the source of truth. All version management runs on **GitHub Actions** with `npm version patch|minor|major --no-git-tag-version`.

| Event | GitHub workflow | Version | Publish |
| --- | --- | --- | --- |
| Every **push** | `npm-publish.yml` | **`npm version patch`** (skipped if the head commit is already a PR **minor/major** bump) | **`npm publish`**, sync, tag `vX.Y.Z`; **commit message → `CHANGELOG.md`**; then bump **neocom-front** / **neocom-back** `develop` to that version + `npm install` |
| PR **opened** → **`develop`** | `version-on-pr-open.yml` | **`npm version minor`** committed on the PR head | Push triggers `npm-publish.yml` |
| PR **opened** → **`main`** | `version-on-pr-open.yml` | **`npm version major`** on the PR head | Push triggers `npm-publish.yml` |

Local package version should match npm (`0.29.2` at last alignment). Local `.githooks/post-commit` is a **no-op** (see `.githooks/README.md`).

### Scripts (manual / CI helpers)

| Command | Meaning |
| --- | --- |
| `npm run version:sync` | Align `package.json` to latest npm publish when one exists |
| `npm run version:bump:patch` / `minor` / `major` | `npm version … --no-git-tag-version` (prefer letting Actions run these) |
| `npm run version:ensure-publishable` | Align / patch until the version is not already on npm |
| `npm run changelog:from-commit` | Prepend current version + commit message to `CHANGELOG.md` |
| `npm run distribute` | Local test + build + patch (optional; not hooked) |
| `npm run publish:ci` / `publish:lib` | Manual fallback if Actions cannot publish |

### GitHub secrets

| Secret | Required for |
| --- | --- |
| **`NPM_TOKEN`** | `npm publish` |
| **`NEOCOM_REPO_TOKEN`** | After publish: push dependency bumps to `neocom-front` / `neocom-back` `develop` (PAT with `contents:write` on those repos) |

Set both on `AdamAntinoo/neocom-domain`.
