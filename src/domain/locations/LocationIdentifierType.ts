/**
 * Kind of a published space location (LOC-001 / DOM-LOC-001).
 */
export type LocationIdentifierType =
  | 'REGION'
  | 'CONSTELLATION'
  | 'SOLAR_SYSTEM'
  | 'STATION'
  | 'STRUCTURE';

export const LOCATION_IDENTIFIER_TYPES: readonly LocationIdentifierType[] = [
  'REGION',
  'CONSTELLATION',
  'SOLAR_SYSTEM',
  'STATION',
  'STRUCTURE',
] as const;
