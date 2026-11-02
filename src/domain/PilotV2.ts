import { PublicPilotV1 } from './PublicPilotV1.js';
import type { SpaceLocationV1 } from './SpaceLocationV1.js';

/** Alliance summary on authenticated pilot. */
export interface PilotAllianceSummary {
  allianceId?: number;
  name?: string;
}

/**
 * Authenticated Pilot (extends PublicPilotV1).
 * EPIC-004 PilotV2 — published domain model for new work.
 * Complements (not implemented here): PilotShipV1, EveLocationV1 (DOM-PILOT-007).
 */
export class PilotV2 extends PublicPilotV1 {
  protected walletBalance = 0;
  protected totalSkillpoints = 0;
  protected currentShipName = '';
  protected currentShipTypeName = '';
  protected lastKnownLocation: SpaceLocationV1 | undefined;
  protected lastUpdateDateTime = '';
  protected alliance: PilotAllianceSummary | undefined;

  constructor(values: object = {}) {
    super(values);
    Object.assign(this, values);
    this.jsonClass = 'PilotV2';
  }

  getWalletBalance(): number {
    return this.walletBalance;
  }

  getTotalSkillpoints(): number {
    return this.totalSkillpoints;
  }

  getCurrentShipName(): string {
    return this.currentShipName;
  }

  getCurrentShipTypeName(): string {
    return this.currentShipTypeName;
  }

  /**
   * String helper over lastKnownLocation (compatibility until EveLocationV1).
   */
  getLastKnownLocation(): string {
    if (!this.lastKnownLocation) {
      return '>>> Last Location undefined';
    }
    return 'location';
  }

  getLastUpdateDateTime(): string {
    return this.lastUpdateDateTime;
  }

  getAllianceId(): number {
    const id = this.alliance?.allianceId;
    return typeof id === 'number' ? id : -1;
  }

  getAllianceLogoUrl(): string | undefined {
    const id = this.getAllianceId();
    if (id < 0) {
      return undefined;
    }
    return `https://images.evetech.net/alliances/${id}/logo`;
  }
}
