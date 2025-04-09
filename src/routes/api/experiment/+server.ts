import { json, type RequestHandler } from '@sveltejs/kit';

import { computeTransitRoute } from '$lib/server/gmaps';
import { DayOfWeek } from '$lib/server/departureTime';

export const GET: RequestHandler = async () => {
	const result = await computeTransitRoute({
		origin: '410 10th Ave, New York, NY',
		dest: '1 Madison Ave, New York, NY 10010',
		targetDeparture: { day: DayOfWeek.Monday, hours: 9, minutes: 0 }
	});
	return json(result);
};
