/**
 * Thin SpaceLocationV1 interface artifact (DOM-SLOCV1-001).
 * Declares no fields — former lastKnownLocation placeholder.
 *
 * New work: use **EveLocationV1** for broader location needs (corporation home,
 * current location). Do not extend SpaceLocationV1 (DOM-SLOCV1-002).
 * Hierarchy field contracts live under `locations/` / domain-locations (EPIC-008).
 * Historical ESI Station mirrors stay internal (DOM-SLOCV1-003).
 */
export interface SpaceLocationV1 {}

/** Broader location model for new work (not published in this change — still to review). */
export type EveLocationV1Target = 'EveLocationV1';
