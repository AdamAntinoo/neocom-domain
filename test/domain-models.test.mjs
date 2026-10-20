import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { ApplicationInfoV1, ServerStatusV1 } from '../dist/index.js';

describe('published domain models', () => {
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
});
