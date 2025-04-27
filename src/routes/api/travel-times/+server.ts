import { error, json, type RequestHandler } from '@sveltejs/kit';

import type { TravelTimes } from '$lib/types';
import {
	computeChurch,
	computeFarmersMarket,
	computePark,
	computeSubwayStop,
	computeWork
} from '$lib/server/destinations';
import { USE_MOCK_DATA } from '$lib/server/env';
import { MOCK_DATA } from '$lib/mockData';
import { geocode } from '$lib/server/gmapsGeocoding';

export const GET: RequestHandler = async ({ url }) => {
	if (USE_MOCK_DATA) {
		return json(MOCK_DATA);
	}

	const address = url.searchParams.get('street-address');
	if (!address) {
		throw error(400, '`street-address` parameter is required');
	}
	const originAddr = `${address}, New York, NY`;
	const originPoint = await geocode(originAddr);

	const result: TravelTimes = {
		work: await computeWork(originAddr),
		subwayStop: await computeSubwayStop(originAddr, originPoint),
		park: await computePark(originAddr, originPoint),
		farmersMarket: await computeFarmersMarket(originAddr, originPoint),
		church: await computeChurch(originAddr)
	};
	return json(result);
};
