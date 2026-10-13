import type { Pilot } from './pilot.js';

/** A game credential has at most this many pilots. */
export const MAX_PILOTS_PER_CREDENTIAL = 3;

/**
 * Game credential that owns the user's pilots.
 * A fourth pilot is not added.
 */
export class GameCredential {
  private readonly pilots: Pilot[] = [];

  addPilot(pilot: Pilot): boolean {
    if (this.pilots.length >= MAX_PILOTS_PER_CREDENTIAL) {
      return false;
    }
    this.pilots.push(pilot);
    return true;
  }

  get pilotCount(): number {
    return this.pilots.length;
  }
}
