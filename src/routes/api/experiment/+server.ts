import { json, type RequestHandler } from '@sveltejs/kit';

import { geocode } from '$lib/server/gmapsGeocoding';

export const GET: RequestHandler = async () => {
	const result = await geocode('410 10th Ave, New York, NY');
	return json(result);
};
