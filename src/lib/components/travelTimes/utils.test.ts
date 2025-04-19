import { expect, test } from 'vitest';
import { goalStatus, bikeRoute, walkRoute, transitRoute } from './utils.js';

test('goalStatus', () => {
	const targets = { idealMinutes: 5, maxMinutes: 10 };
	expect(goalStatus([{ timeMinutes: 4 }], targets)).toEqual('met');
	expect(goalStatus([{ timeMinutes: 5 }], targets)).toEqual('met');
	expect(goalStatus([{ timeMinutes: 6 }], targets)).toEqual('partial');
	expect(goalStatus([{ timeMinutes: 10 }], targets)).toEqual('partial');
	expect(goalStatus([{ timeMinutes: 11 }], targets)).toEqual('unmet');
	expect(goalStatus([{ timeMinutes: 8 }, { timeMinutes: 44 }], targets)).toEqual('partial');
	expect(goalStatus([{ timeMinutes: 20 }, { timeMinutes: 44 }], targets)).toEqual('unmet');
});

test('bikeRoute', () => {
	expect(bikeRoute({ timeMinutes: 4, distanceMiles: 2.1 })).toEqual('🚴 4 minutes (2.1 miles)');
});

test('walkRoute', () => {
	expect(walkRoute({ timeMinutes: 4, distanceMiles: 2.1 })).toEqual('🚶 4 minutes (2.1 miles)');
});

test('transitRoute', () => {
	expect(transitRoute({ timeMinutes: 4, type: 'walking' })).toEqual('🚇 4 minutes by walking');
	expect(transitRoute({ timeMinutes: 6, type: 'transit', summary: '6 -> 7' })).toEqual(
		'🚇 6 minutes on the 6 -> 7'
	);
});
