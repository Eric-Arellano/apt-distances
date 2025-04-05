import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return json({
		work: {
			walk: {
				time_m: 18,
				distance_mi: 1.5
			},
			bike: {
				time_m: 4,
				distance_mi: 1.5
			}
		}
	});
};
