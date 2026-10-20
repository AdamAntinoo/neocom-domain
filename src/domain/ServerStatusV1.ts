import { NeoCom } from './core/NeoCom.js';

/**
 * EVE Online / NeoCom server status for header rendering.
 * EPIC-004 ServerStatusV1 — published domain model.
 */
export class ServerStatusV1 extends NeoCom {
  private server = '';
  private players = 0;
  private start_time = '';
  public backendVersion = '';
  public SDEVersion = '';
  public startAgo = '';
  public nextDowntime = '';

  constructor(values: object = {}) {
    super(values);
    Object.assign(this, values);
    this.jsonClass = 'ServerStatusV1';
  }

  getServerName(): string {
    return this.server;
  }

  getPlayersCount(): number {
    return this.players;
  }

  getStartTime(): string {
    return this.start_time;
  }

  getStartedAgo(): string {
    return this.startAgo;
  }

  getNextDowntime(): string {
    return this.nextDowntime;
  }

  getBackendVersion(): string {
    return this.backendVersion;
  }

  getSDEVersion(): string {
    return this.SDEVersion;
  }
}
