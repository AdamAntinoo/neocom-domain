export type { Character } from './character.js';
export { GameCredential, MAX_PILOTS_PER_CREDENTIAL } from './game-credential.js';
export { Pilot } from './pilot.js';

/** Published domain models (header / UI programme types). Prefer these over app-local copies. */
export {
  NeoCom,
  ApplicationInfoV1,
  ServerStatusV1,
  PublicPilotV1,
  PILOT_FIXTURE_CHARACTER_ID,
  PilotV2,
  BlueprintV1,
  SpaceLocation,
  LOCATION_FIXTURE,
  LOCATION_IDENTIFIER_TYPES,
} from './domain/index.js';
export type {
  PilotNameSummary,
  PublicCorporationSummary,
  PilotAllianceSummary,
  SpaceLocationV1,
  EveLocationV1Target,
  LocationIdentifierType,
} from './domain/index.js';
