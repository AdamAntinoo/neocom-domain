import type { Character } from './character.js';

/**
 * Pilot is the programme name for the Eve Online user's presence in the game.
 * It is built from an ESI Character.
 */
export class Pilot {
  readonly characterId: number;
  readonly birthday: string;
  readonly bloodlineId: number;
  readonly corporationId: number;
  readonly gender: string;
  readonly name: string;
  readonly raceId: number;
  readonly achievementScore: number;
  readonly description: string;
  readonly securityStatus: number;

  private constructor(characterId: number, character: Character) {
    this.characterId = characterId;
    this.birthday = character.birthday;
    this.bloodlineId = character.bloodline_id;
    this.corporationId = character.corporation_id;
    this.gender = character.gender;
    this.name = character.name;
    this.raceId = character.race_id;
    this.achievementScore = character.achievement_score;
    this.description = character.description;
    this.securityStatus = character.security_status;
  }

  static fromCharacter(characterId: number, character: Character): Pilot {
    return new Pilot(characterId, character);
  }
}
