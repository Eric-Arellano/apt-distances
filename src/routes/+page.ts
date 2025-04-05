import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/distances');
	const distances = await res.json();
	return { distances };
};
