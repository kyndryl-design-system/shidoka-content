import { Eyebrow } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-eyebrow', () => {
  test('is defined', () => {
    const el = document.createElement('kd-eyebrow');
    assert.instanceOf(el, Eyebrow);
  });
});
