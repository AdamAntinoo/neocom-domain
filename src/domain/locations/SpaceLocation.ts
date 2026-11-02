import { NeoCom } from '../core/NeoCom.js';
import type { LocationIdentifierType } from './LocationIdentifierType.js';

/** Fixture ids from EPIC-008 / LOC-020…050 (Amarr chain). */
export const LOCATION_FIXTURE = {
  regionId: 1000043,
  regionName: 'Domain',
  constellationId: 20000322,
  constellationName: 'Throne Worlds',
  solarSystemId: 30002187,
  solarSystemName: 'Amarr',
  securityClass: 'E1',
  securityStatus: 0.5623334,
  stationId: 60008494,
  stationName: 'Amarr VIII (Oris) - Emperor Family Academy',
} as const;

/**
 * Space location lookup node — one object carries kind, id, and ancestor chain.
 * EPIC-008 / domain-locations. Mirrors infinity SpaceLocationImplementation shape.
 */
export class SpaceLocation extends NeoCom {
  locationType: LocationIdentifierType = 'REGION';
  locationId = 0;

  regionId?: number;
  regionName?: string;
  constellationId?: number;
  constellationName?: string;
  solarSystemId?: number;
  solarSystemName?: string;
  securityClass?: string;
  securityStatus?: number;
  stationId?: number;
  stationName?: string;
  structureId?: number;
  structureName?: string;
  structureTypeId?: number;
  ownerId?: number;
  corporationId?: number;
  corporationName?: string;

  constructor(values: object = {}) {
    super(values);
    Object.assign(this, values);
    this.jsonClass = 'SpaceLocation';
  }

  getLocationType(): LocationIdentifierType {
    return this.locationType;
  }

  getLocationId(): number {
    return this.locationId;
  }

  static region(regionId: number, regionName: string): SpaceLocation {
    return new SpaceLocation({
      locationType: 'REGION',
      locationId: regionId,
      regionId,
      regionName,
    });
  }

  static constellation(
    constellationId: number,
    constellationName: string,
    regionId: number,
    regionName: string,
  ): SpaceLocation {
    return new SpaceLocation({
      locationType: 'CONSTELLATION',
      locationId: constellationId,
      constellationId,
      constellationName,
      regionId,
      regionName,
    });
  }

  static solarSystem(fields: {
    solarSystemId: number;
    solarSystemName: string;
    securityClass: string;
    securityStatus: number;
    constellationId: number;
    constellationName: string;
    regionId: number;
    regionName: string;
  }): SpaceLocation {
    return new SpaceLocation({
      locationType: 'SOLAR_SYSTEM',
      locationId: fields.solarSystemId,
      ...fields,
    });
  }

  static station(fields: {
    stationId: number;
    stationName: string;
    solarSystemId: number;
    solarSystemName: string;
    securityClass: string;
    securityStatus: number;
    constellationId: number;
    constellationName: string;
    regionId: number;
    regionName: string;
  }): SpaceLocation {
    return new SpaceLocation({
      locationType: 'STATION',
      locationId: fields.stationId,
      ...fields,
    });
  }

  static structure(fields: {
    structureId: number;
    structureName: string;
    structureTypeId: number;
    ownerId: number;
    corporationId: number;
    corporationName: string;
    stationId?: number;
    stationName?: string;
    solarSystemId: number;
    solarSystemName: string;
    securityClass: string;
    securityStatus: number;
    constellationId: number;
    constellationName: string;
    regionId: number;
    regionName: string;
  }): SpaceLocation {
    return new SpaceLocation({
      locationType: 'STRUCTURE',
      locationId: fields.structureId,
      ...fields,
    });
  }

  /** Amarr / Domain fixture chain used in LOC-020…050. */
  static fixtureStation(): SpaceLocation {
    const f = LOCATION_FIXTURE;
    return SpaceLocation.station({
      stationId: f.stationId,
      stationName: f.stationName,
      solarSystemId: f.solarSystemId,
      solarSystemName: f.solarSystemName,
      securityClass: f.securityClass,
      securityStatus: f.securityStatus,
      constellationId: f.constellationId,
      constellationName: f.constellationName,
      regionId: f.regionId,
      regionName: f.regionName,
    });
  }
}
