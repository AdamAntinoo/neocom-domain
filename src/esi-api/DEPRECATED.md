# Deprecated — `src/esi-api`

`neocom-domain` `src/esi-api` is **deprecated** (BACK-SVC-050…052).

- Do **not** export ESI DTOs or ESI API classes outside `neocom-back` via this package.
- ESI types belong inside `neocom-back` (or the ESI client library).
- This tree **MAY** be removed from `neocom-domain` once consumers no longer import it.
