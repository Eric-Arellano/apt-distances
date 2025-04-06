import type { TravelTimes } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/travel-times');
	const travelTimes: TravelTimes = await res.json();
	return { travelTimes };
};
