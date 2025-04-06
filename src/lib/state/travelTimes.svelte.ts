import type { TravelTimes, TravelTimesRequest } from '$lib/types';

const travelTimesRequest: TravelTimesRequest = $state({ task: null });

export async function getTravelTimes(): Promise<TravelTimes> {
	const res = await fetch('/api/travel-times', { signal: AbortSignal.timeout(15_000) });
	if (!res.ok) {
		throw new Error(`Failed to fetch travel times: ${res.status} ${res.statusText}`);
	}
	return res.json() as Promise<TravelTimes>;
}

export default travelTimesRequest;
