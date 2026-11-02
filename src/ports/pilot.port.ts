import type { PilotV2 } from '../domain/PilotV2.js';

/**
 * Pilot port — kept separate from Industry (BACK-SVC-021).
 * Implemented by `neocom-back` adapters; signatures use domain models only.
 */
export interface PilotPort {
  findById(pilotId: number): Promise<PilotV2>;
}
