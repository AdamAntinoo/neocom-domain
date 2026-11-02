export type { Character } from './character.js';
export { GameCredential, MAX_PILOTS_PER_CREDENTIAL } from './game-credential.js';
/** @deprecated Prefer {@link PilotV2} under `src/domain` (versioned interchange). */
export { Pilot } from './pilot.js';

export { Record } from './interfaces/Record.interface.js';

/** Published interchange models (extend Record). Prefer these over app-local copies. */
export {
  ApplicationInfoV1,
  ServerStatusV1,
  PublicPilotV1,
  PILOT_FIXTURE_CHARACTER_ID,
  PilotV2,
  BlueprintV1,
  SpaceLocationV1,
  LOCATION_FIXTURE,
  LOCATION_IDENTIFIER_TYPES,
} from './domain/index.js';
export type {
  PilotNameSummary,
  PublicCorporationSummary,
  PilotAllianceSummary,
  LocationIdentifierType,
} from './domain/index.js';

/** Ports for backend adapters (BACK-SVC-003, BACK-SVC-020…032). */
export type { PilotPort, IndustryPort } from './ports/index.js';
