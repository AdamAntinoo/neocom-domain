import { NeoCom } from './core/NeoCom.js';

/**
 * Front application identity (name, version, copyright) for header rendering.
 * EPIC-004 ApplicationInfoV1 — published domain model.
 */
export class ApplicationInfoV1 extends NeoCom {
  private name = '';
  private version = '';
  private copyright = '';

  constructor(values: object = {}) {
    super(values);
    Object.assign(this, values);
    this.jsonClass = 'ApplicationInfoV1';
  }

  getName(): string {
    return this.name;
  }

  getVersion(): string {
    return this.version;
  }

  getCopyright(): string {
    return this.copyright;
  }
}
