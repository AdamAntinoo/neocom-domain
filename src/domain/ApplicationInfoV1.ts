import { Record } from '../interfaces/Record.interface.js';

/**
 * Application identity (name, version, copyright) for shared interchange.
 * EPIC-004 ApplicationInfoV1 — published model (extends Record). Front renders via jsonClass.
 */
export class ApplicationInfoV1 extends Record {
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
