import { Record } from '../interfaces/Record.interface.js';

/**
 * Blueprint instance (authenticated). Base for ProcessedBlueprint* (not in this change).
 * EPIC-004 BlueprintV1 — published interchange model (extends Record). No BOM, no cost index.
 * Front render selector for base identity card: `v1-blueprint` (via jsonClass).
 */
export class BlueprintV1 extends Record {
  protected blueprintId = 0;
  protected blueprintTypeId = 0;
  protected blueprintTypeName = '';
  protected blueprintTypeIconURL = '';
  protected outputTypeId = 0;
  protected outputTypeName = '';
  protected outputTypeIconURL = '';
  protected runs = 0;
  protected materialEfficiency = 0;
  protected timeEfficiency = 0;
  protected maxRuns = 0;

  constructor(values: object = {}) {
    super(values);
    Object.assign(this, values);
    this.jsonClass = 'BlueprintV1';
    this.materialEfficiency = clamp(this.materialEfficiency, 0, 10);
    this.timeEfficiency = clamp(this.timeEfficiency, 0, 20);
    if (!this.blueprintTypeIconURL && this.blueprintTypeId > 0) {
      this.blueprintTypeIconURL = `https://images.evetech.net/types/${this.blueprintTypeId}/bp`;
    }
    if (!this.outputTypeIconURL && this.outputTypeId > 0) {
      this.outputTypeIconURL = `https://images.evetech.net/types/${this.outputTypeId}/icon`;
    }
  }

  getBlueprintId(): number {
    return this.blueprintId;
  }

  getBlueprintTypeId(): number {
    return this.blueprintTypeId;
  }

  getBlueprintTypeName(): string {
    return this.blueprintTypeName;
  }

  getBlueprintTypeIconURL(): string {
    return this.blueprintTypeIconURL;
  }

  getOutputTypeId(): number {
    return this.outputTypeId;
  }

  getOutputTypeName(): string {
    return this.outputTypeName;
  }

  getOutputTypeIconURL(): string {
    return this.outputTypeIconURL;
  }

  getRuns(): number {
    return this.runs;
  }

  getMaterialEfficiency(): number {
    return this.materialEfficiency;
  }

  getTimeEfficiency(): number {
    return this.timeEfficiency;
  }

  getMaxRuns(): number {
    return this.maxRuns;
  }
}

function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) {
    return min;
  }
  return Math.min(max, Math.max(min, value));
}
