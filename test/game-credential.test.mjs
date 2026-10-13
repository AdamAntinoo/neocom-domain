import assert from 'node:assert/strict';
import test from 'node:test';
import { GameCredential, Pilot } from '../dist/index.js';

const character = {
  birthday: '2013-09-09T19:40:09Z',
  bloodline_id: 6,
  corporation_id: 1000077,
  gender: 'male',
  name: 'Perico Tuerto',
  race_id: 4,
  achievement_score: 0,
  description: '',
  security_status: 0,
};

test('a game credential does not take a fourth pilot', () => {
  const credential = new GameCredential();
  const pilots = [1, 2, 3, 4].map((characterId) => Pilot.fromCharacter(characterId, character));

  assert.equal(credential.addPilot(pilots[0]), true);
  assert.equal(credential.addPilot(pilots[1]), true);
  assert.equal(credential.addPilot(pilots[2]), true);
  assert.equal(credential.addPilot(pilots[3]), false);
  assert.equal(credential.pilotCount, 3);
});
