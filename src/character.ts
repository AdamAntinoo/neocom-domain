/**
 * ESI Character: public information from GetCharactersDetail.
 * Field names stay the ESI snake_case payload.
 */
export interface Character {
  birthday: string;
  bloodline_id: number;
  corporation_id: number;
  gender: string;
  name: string;
  race_id: number;
  achievement_score: number;
  description: string;
  security_status: number;
}
