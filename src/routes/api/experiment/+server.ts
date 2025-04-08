import { json, type RequestHandler } from '@sveltejs/kit';

import { computeWalk } from '$lib/server/gmaps';

export const GET: RequestHandler = async () => {
	const result = await computeWalk();
	return json(result);
};
