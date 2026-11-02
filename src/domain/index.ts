/**
 * Published programme domain models (interchange: extend Record).
 * Front/back obtain new or changed types by installing an updated neocom-domain package
 * (npm dependency), not by copying sources into application repos.
 * Front render/node base NeoCom lives in neocom-front, not here.
 */
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
export {
  LOCATION_IDENTIFIER_TYPES,
  type LocationIdentifierType,
} from './LocationIdentifierType.js';
export { LOCATION_FIXTURE, SpaceLocationV1 } from './SpaceLocationV1.js';
