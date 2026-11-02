/**
 * Published programme domain models.
 * Front/back obtain new or changed types by installing an updated neocom-domain package
 * (npm dependency), not by copying sources into application repos.
 */
export { NeoCom } from './core/index.js';
export { ApplicationInfoV1 } from './ApplicationInfoV1.js';
export { ServerStatusV1 } from './ServerStatusV1.js';
export {
  PublicPilotV1,
  PILOT_FIXTURE_CHARACTER_ID,
  type PilotNameSummary,
  type PublicCorporationSummary,
} from './PublicPilotV1.js';
export { PilotV2, type PilotAllianceSummary } from './PilotV2.js';
export { BlueprintV1 } from './BlueprintV1.js';
export { type SpaceLocationV1, type EveLocationV1Target } from './SpaceLocationV1.js';
export {
  SpaceLocation,
  LOCATION_FIXTURE,
  LOCATION_IDENTIFIER_TYPES,
  type LocationIdentifierType,
} from './locations/index.js';
