import { LeadspaceInterior } from '../../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-leadspace-interior', () => {
	test('is defined', () => {
		const el = document.createElement('kd-leadspace-interior');
		assert.instanceOf(el, LeadspaceInterior);
	});
});
