import { SpacerLine } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-spacer-line', () => {
	test('is defined', () => {
		const el = document.createElement('kd-spacer-line');
		assert.instanceOf(el, SpacerLine);
	});
});
