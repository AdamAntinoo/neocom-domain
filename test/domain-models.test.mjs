import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  Record,
  ApplicationInfoV1,
  ServerStatusV1,
  PublicPilotV1,
  PilotV2,
  BlueprintV1,
  SpaceLocationV1,
  PILOT_FIXTURE_CHARACTER_ID,
  LOCATION_FIXTURE,
} from '../dist/index.js';

describe('published domain models', () => {
  it('interchange models extend Record, not a front NeoCom render base', () => {
    const models = [
      new ApplicationInfoV1({ name: 'n' }),
      new ServerStatusV1({ server: 's' }),
      new PublicPilotV1({ pilotId: 1 }),
      new PilotV2({ pilotId: 1 }),
      new BlueprintV1({}),
      SpaceLocationV1.fixtureStation(),
    ];
    for (const model of models) {
      assert.ok(model instanceof Record);
      assert.equal(typeof model.collaborate2View, 'undefined');
      assert.equal(typeof model.isExpanded, 'undefined');
    }
  });

  it('ApplicationInfoV1 exposes jsonClass and accessors', () => {
    const info = new ApplicationInfoV1({
      name: 'neocom-front',
      version: '0.1.0',
      copyright: '© test',
    });
    assert.equal(info.getJsonClass(), 'ApplicationInfoV1');
    assert.equal(info.getName(), 'neocom-front');
    assert.equal(info.getVersion(), '0.1.0');
    assert.equal(info.getCopyright(), '© test');
  });

  it('ServerStatusV1 exposes jsonClass and accessors', () => {
    const status = new ServerStatusV1({
      server: 'Tranquility',
      players: 12,
      backendVersion: '1',
      SDEVersion: '2',
      nextDowntime: 'soon',
    });
    assert.equal(status.getJsonClass(), 'ServerStatusV1');
    assert.equal(status.getServerName(), 'Tranquility');
    assert.equal(status.getPlayersCount(), 12);
    assert.equal(status.getBackendVersion(), '1');
  });

  it('PublicPilotV1 portrait and HEADER helpers', () => {
    const pilot = new PublicPilotV1({
      pilotId: PILOT_FIXTURE_CHARACTER_ID,
      name: 'Perico Tuerto',
      gender: 'male',
      raceData: { name: 'Gallente' },
      ancestryData: { name: 'Activists' },
      bloodlineData: { name: 'Gallente' },
      corporation: { corporationId: 98000001 },
    });
    assert.equal(pilot.getJsonClass(), 'PublicPilotV1');
    assert.equal(pilot.getPilotId(), 93813310);
    assert.equal(
      pilot.getPilotIcon(),
      'https://images.evetech.net/characters/93813310/portrait?size=64',
    );
    assert.equal(pilot.getGenderDisplay(), 'MALE');
    assert.equal(pilot.getAncestryLine(), 'Gallente - Activists - Gallente');
    assert.equal(pilot.getCorporationId(), 98000001);
  });

  it('PilotV2 extends public fields with V2 contract', () => {
    const pilot = new PilotV2({
      pilotId: PILOT_FIXTURE_CHARACTER_ID,
      name: 'Perico Tuerto',
      gender: 'male',
      totalSkillpoints: 1_000_000,
      walletBalance: 42.5,
      currentShipName: 'Probe',
      currentShipTypeName: 'Frigate',
    });
    assert.equal(pilot.getJsonClass(), 'PilotV2');
    assert.notEqual(pilot.getJsonClass(), 'Pilot');
    assert.equal(pilot.getTotalSkillpoints(), 1_000_000);
    assert.equal(pilot.getWalletBalance(), 42.5);
    assert.equal(pilot.getCurrentShipName(), 'Probe');
    assert.equal(pilot.getPilotIcon().includes('93813310'), true);
  });

  it('SpaceLocationV1 jsonClass matches programme type name (DOM-JSONCLASS-003)', () => {
    assert.equal(SpaceLocationV1.fixtureStation().getJsonClass(), 'SpaceLocationV1');
  });

  it('BlueprintV1 exposes ESI base fields without BOM', () => {
    const bp = new BlueprintV1({
      blueprintId: 101,
      blueprintTypeId: 1245,
      blueprintTypeName: 'Test BPO',
      outputTypeId: 582,
      outputTypeName: 'Bantam',
      runs: 300,
      materialEfficiency: 10,
      timeEfficiency: 20,
      maxRuns: 300,
    });
    assert.equal(bp.getJsonClass(), 'BlueprintV1');
    assert.equal(bp.getMaterialEfficiency(), 10);
    assert.equal(bp.getTimeEfficiency(), 20);
    assert.equal(bp.getBlueprintTypeIconURL().includes('/types/1245/bp'), true);
    assert.equal(bp.getOutputTypeIconURL().includes('/types/582/icon'), true);
  });

  it('BlueprintV1 clamps materialEfficiency 0–10 and timeEfficiency 0–20 (DOM-BP-002)', () => {
    const bp = new BlueprintV1({
      materialEfficiency: 99,
      timeEfficiency: -5,
    });
    assert.equal(bp.getMaterialEfficiency(), 10);
    assert.equal(bp.getTimeEfficiency(), 0);
  });

  it('SpaceLocationV1 station carries ancestor chain', () => {
    const station = SpaceLocationV1.fixtureStation();
    assert.equal(station.getLocationType(), 'STATION');
    assert.equal(station.getLocationId(), LOCATION_FIXTURE.stationId);
    assert.equal(station.regionId, LOCATION_FIXTURE.regionId);
    assert.equal(station.constellationId, LOCATION_FIXTURE.constellationId);
    assert.equal(station.solarSystemId, LOCATION_FIXTURE.solarSystemId);
    assert.equal(station.securityClass, LOCATION_FIXTURE.securityClass);
  });

  it('SpaceLocationV1 region locationId equals regionId', () => {
    const region = SpaceLocationV1.region(LOCATION_FIXTURE.regionId, LOCATION_FIXTURE.regionName);
    assert.equal(region.getLocationType(), 'REGION');
    assert.equal(region.getLocationId(), region.regionId);
  });
});
