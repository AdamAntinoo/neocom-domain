# neocom-domain

Node package of TypeScript classes for the NEOCOM business domain. Front and back depend on the published package.

```bash
npm install
npm test
```

## Version and publish

Versions come from [GitVersion](https://gitversion.net/) in continuous deployment mode (`GitVersion.yml`). The version-source tag is `v0.30.0` (the last package already on npm is `0.29.2`). On `main`, each later commit increments the minor version.

```bash
npm run version:sync   # write GitVersion SemVer into package.json
npm run distribute
npm publish
```

`Pilot.fromCharacter` builds the programme model from an ESI Character body. A `GameCredential` keeps at most 3 pilots. The Perico Tuerto WireMock stub lives in `neocom-front`.
