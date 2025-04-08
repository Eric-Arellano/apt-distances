import { RoutesClient } from '@googlemaps/routing';

import type { WalkRoute } from '$lib/types';

const API_KEY = process.env['GOOGLE_MAPS_TOKEN'];
delete process.env['GOOGLE_MAPS_TOKEN'];

const ROUTES_CLIENT = new RoutesClient({ apiKey: API_KEY });

function secondsStringToMinutes(seconds: string): number {
	return Math.round(Number(seconds) / 60);
}

function metersToMi(meters: number): number {
	return Math.round(meters * 0.0006213712 * 10) / 10;
}

export async function computeWalk(): Promise<WalkRoute> {
	const response = await ROUTES_CLIENT.computeRoutes(
		{
			origin: { address: '410 10th Ave, New York, NY' },
			destination: { address: '1 Madison Ave, New York, NY 10010' },
			travelMode: 'WALK'
		},
		{
			otherArgs: {
				headers: {
					'Content-Type': 'application/json',
					'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters'
				}
			}
		}
	);
	const routes = response[0].routes;
	if (!routes || routes.length !== 1) {
		throw new Error(`Unexpected routes in response: ${routes}`);
	}
	const route = routes[0];
	return {
		timeMinutes: secondsStringToMinutes(route.duration!.seconds as string),
		distanceMiles: metersToMi(route.distanceMeters!)
	};
}
