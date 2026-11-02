import { Record } from '../interfaces/Record.interface.js';

/** Named race / ancestry / bloodline summary (not raw ESI payloads). */
export interface PilotNameSummary {
  name: string;
}

/** Public corporation summary on a pilot. */
export interface PublicCorporationSummary {
  corporationId?: number;
  name?: string;
}

/** Development fixture character id (Perico Tuerto). */
export const PILOT_FIXTURE_CHARACTER_ID = 93813310;

/**
 * Public-only Pilot base (legacy / unauthenticated).
 * EPIC-004 PublicPilotV1 — published interchange model (extends Record). PilotV2 extends this.
 */
export class PublicPilotV1 extends Record {
  protected pilotId = 0;
  protected name = '';
  protected corporation: PublicCorporationSummary | undefined;
  protected birthday = '';
  protected description = '';
  protected gender = '';
  protected securityStatus = 0;
  /** Legacy icon URL field; new renders use getPilotIcon(). */
  protected url4Icon = '';
  protected raceData: PilotNameSummary | undefined;
  protected ancestryData: PilotNameSummary | undefined;
  protected bloodlineData: PilotNameSummary | undefined;

  constructor(values: object = {}) {
    super(values);
    Object.assign(this, values);
    this.jsonClass = 'PublicPilotV1';
  }

  getPilotId(): number {
    return this.pilotId;
  }

  getCorporationId(): number {
    const id = this.corporation?.corporationId;
    return typeof id === 'number' ? id : -1;
  }

  getPilotIcon(): string {
    const id = this.pilotId > 0 ? this.pilotId : 1;
    return `https://images.evetech.net/characters/${id}/portrait?size=64`;
  }

  getCorporationLogoUrl(): string | undefined {
    const id = this.getCorporationId();
    if (id < 0) {
      return undefined;
    }
    return `https://images.evetech.net/corporations/${id}/logo`;
  }

  getName(): string {
    return this.name;
  }

  getGender(): string {
    return this.gender;
  }

  /** Ancestry line for v1-public-pilot HEADER: race - ancestry - bloodline. */
  getAncestryLine(): string {
    const race = this.raceData?.name ?? '';
    const ancestry = this.ancestryData?.name ?? '';
    const bloodline = this.bloodlineData?.name ?? '';
    return `${race} - ${ancestry} - ${bloodline}`;
  }

  /** HEADER gender display (uppercase). */
  getGenderDisplay(): string {
    return this.gender.toUpperCase();
  }
}
