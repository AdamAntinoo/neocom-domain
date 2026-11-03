import type { BlueprintV1 } from '../domain/BlueprintV1.js';

/** Nest (or other) injection token for {@link IndustryPort}. */
export const INDUSTRY_PORT = Symbol('INDUSTRY_PORT');

/**
 * Industry port — non-pilot service endpoints in EPIC-009 scope (BACK-SVC-022).
 * First capability: pilot blueprints as `BlueprintV1[]` (BACK-SVC-070…071).
 * Implemented by `neocom-back` adapters; signatures use domain models only.
 */
export interface IndustryPort {
  /**
   * Blueprints belonging to the pilot identified by `pilotId`.
   */
  getPilotBlueprints(pilotId: number): Promise<BlueprintV1[]>;
}
