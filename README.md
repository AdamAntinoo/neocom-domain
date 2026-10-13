# neocom-domain

Node package of TypeScript classes for the NEOCOM business domain. Front and back depend on the published package.

```bash
npm install
npm test
```

`GET /characters/93813310` is stubbed from `wiremock/` (Perico Tuerto). `Pilot.fromCharacter` builds the programme model from that ESI Character body. A `GameCredential` keeps at most 3 pilots.
