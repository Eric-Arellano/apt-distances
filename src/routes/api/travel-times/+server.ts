import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { TravelTimes } from '$lib/types';
import {
	computeChurch,
	computeFractal,
	computePartner,
	computeWork
} from '$lib/server/destinations';

export const GET: RequestHandler = async ({ url }) => {
	let address = url.searchParams.get('street-address');
	if (!address) {
		throw error(400, '`street-address` parameter is required');
	}
	const origin = `${address}, New York, NY`;

	const result: TravelTimes = {
		work: await computeWork(origin),
		partner: await computePartner(origin),
		subwayStop: {
			closest: {
				name: '14th St',
				lines: ['E', 'Q', 'R']
			},
			walk: {
				timeMinutes: 6,
				distanceMiles: 0.3
			}
		},
		park: {
			closest: {
				name: 'Union Square'
			},
			walk: {
				timeMinutes: 12,
				distanceMiles: 0.8
			}
		},
		farmersMarket: {
			closest: {
				name: 'Union Square'
			},
			walk: {
				timeMinutes: 12,
				distanceMiles: 0.8
			}
		},
		fractal: await computeFractal(origin),
		church: await computeChurch(origin)
	};
	return json(result);
};
