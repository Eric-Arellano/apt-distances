import { RoutesClient } from '@googlemaps/routing';

import type { ActiveTransportRoute } from '$lib/types';

const API_KEY = process.env['GOOGLE_MAPS_TOKEN'];
delete process.env['GOOGLE_MAPS_TOKEN'];

const ROUTES_CLIENT = new RoutesClient({ apiKey: API_KEY });

function secondsStringToMinutes(seconds: string): number {
	return Math.round(Number(seconds) / 60);
}

function metersToMi(meters: number): number {
	return Math.round(meters * 0.0006213712 * 10) / 10;
}

async function computeActiveTransitRoute(options: {
	origin: string;
	dest: string;
	mode: 'WALK' | 'BICYCLE';
}): Promise<ActiveTransportRoute> {
	const { origin, dest, mode } = options;
	const response = await ROUTES_CLIENT.computeRoutes(
		{
			origin: { address: origin },
			destination: { address: dest },
			travelMode: mode
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

type EmptyRecord = Record<string, never>;
type ComputeRoutesResult<W extends boolean, B extends boolean> = (W extends true
	? { walk: ActiveTransportRoute }
	: EmptyRecord) &
	(B extends true ? { bike: ActiveTransportRoute } : EmptyRecord);

export async function computeRoutes<W extends boolean, B extends boolean>(options: {
	origin: string;
	dest: string;
	walk: W;
	bike: B;
}): Promise<ComputeRoutesResult<W, B>> {
	const { origin, dest, walk, bike } = options;
	const result = {} as ComputeRoutesResult<W, B>;
	if (walk) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(result as any).walk = await computeActiveTransitRoute({ origin, dest, mode: 'WALK' });
	}
	if (bike) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(result as any).bike = await computeActiveTransitRoute({ origin, dest, mode: 'BICYCLE' });
	}
	return result;
}
