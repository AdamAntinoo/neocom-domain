/**
 * @deprecated Interchange `Record` for neocom-back `*Dto` types has moved to
 * `neocom-back` `infrastructure/adapters/dto/record.ts`. This class remains only
 * for existing published domain models (`BlueprintV1`, `SpaceLocationV1`, …)
 * until a domain migration removes those extends.
 *
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
