/**
 * Base for shared domain interchange between front and back.
 * Carries `jsonClass` for wire typing; no UI/render state.
 */
export class Record {
  public jsonClass: string = 'Record';

  constructor(fields: object = {}) {
    Object.assign(this, fields);
  }

  getJsonClass(): string {
    return this.jsonClass;
  }
}
