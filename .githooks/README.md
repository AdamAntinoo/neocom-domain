# Local git hooks

Version bumps, **npm publish**, and **consumer dependency updates** run only on **GitHub Actions** (`.github/workflows/`). Do not add a local post-commit that bumps or publishes.

| Workflow | Role |
| --- | --- |
| `npm-publish.yml` | Push → patch (or keep PR minor/major) → CHANGELOG → publish → tag → bump front/back `develop` + `npm install` |
| `version-on-pr-open.yml` | PR opened → `develop`: minor; → `main`: major |

`package.json` `prepare` may still set `core.hooksPath` here for future non-version hooks; it must not drive npm versioning.
