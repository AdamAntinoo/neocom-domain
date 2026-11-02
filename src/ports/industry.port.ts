import type { BlueprintV1 } from '../domain/BlueprintV1.js';

/**
 * Industry port — non-pilot service endpoints in EPIC-009 scope (BACK-SVC-022).
 * First capability: pilot blueprints as `BlueprintV1[]` (BACK-SVC-070…071).
 */
export interface IndustryPort {
  /**
   * Blueprints belonging to the pilot identified by `pilotId`.
   */
  getPilotBlueprints(pilotId: number): Promise<BlueprintV1[]>;
}
