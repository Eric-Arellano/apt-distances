import type { TravelTimes, TravelTimesRequest } from '$lib/types';

const travelTimesRequest: TravelTimesRequest = $state({ task: null });

export async function getTravelTimes(): Promise<TravelTimes> {
	const res = await fetch('/api/travel-times');
	return res.json() as Promise<TravelTimes>;
}

export default travelTimesRequest;
