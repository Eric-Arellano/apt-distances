import type { TravelTimes, TravelTimesRequest } from '$lib/types';

const travelTimesRequest: TravelTimesRequest = $state({ task: null });

export async function getTravelTimes(streetAddress: string): Promise<TravelTimes> {
	const params = new URLSearchParams({ 'street-address': streetAddress });
	const res = await fetch(`/api/travel-times?${params}`, { signal: AbortSignal.timeout(30_000) });
	if (!res.ok) {
		throw new Error(`Failed to fetch travel times: ${res.status} ${res.statusText}`);
	}
	return res.json() as Promise<TravelTimes>;
}

export default travelTimesRequest;
