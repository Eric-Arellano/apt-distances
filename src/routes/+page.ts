import type { DistancesResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/distances');
	const distances: DistancesResult = await res.json();
	return { distances };
};
