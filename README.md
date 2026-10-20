# neocom-domain

Node package of TypeScript classes for the NEOCOM business domain. Front and back depend on the published package.

**Published programme models** live under `src/domain/` (e.g. `ApplicationInfoV1`, `ServerStatusV1`). This is the home for new or generated domain classes. Consumers get updates by installing a new package version from npm — do not copy model sources into `neocom-front` / `neocom-back`.

```bash
nvm use
npm install
npm test
```

## Version and publish (npm is authoritative)

Package version is controlled by **npm**, not GitVersion / GitHub.

| Step | Command | Meaning |
| --- | --- | --- |
| Align local | `npm run version:sync` | Set `package.json` `"version"` from the latest **npm** `neocom-domain` publish |
| Bump before publish | `npm run version:bump:patch` / `version:bump:minor` / `version:bump:major` | Raise local version with `npm version … --no-git-tag-version` (no git tag yet) |
| Publish | `npm run distribute` then `npm publish` | Ship `dist/` only (`files` field) |
| Align after publish | `npm run version:sync` then `npm run version:tag` | Confirm `package.json` matches npm; create annotated git tag `vX.Y.Z` so git follows npm |

One-shot (minor bump): `npm run publish:lib` (only when the user asks to publish).

Do **not** run GitVersion to write `package.json`. Do **not** use plain `npm version` without `--no-git-tag-version` (that would create a competing git tag). Push the `vX.Y.Z` tag only when the user asks.

`GitVersion.yml` is retained only as historical CI metadata; it does **not** drive the published package version.

`Pilot.fromCharacter` builds the programme model from an ESI Character body. A `GameCredential` keeps at most 3 pilots. The Perico Tuerto WireMock stub lives in `neocom-front`.
