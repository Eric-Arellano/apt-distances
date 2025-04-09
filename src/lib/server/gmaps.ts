import { RoutesClient } from '@googlemaps/routing';

import type { ActiveTransportRoute, TransitRoute } from '$lib/types';
import { getNextDayTime, type TargetDate } from './departureTime';
import { DateTime } from 'luxon';

const ROUTES_CLIENT = new RoutesClient({ apiKey: process.env['GOOGLE_MAPS_TOKEN'] });

function secondsStringToMinutes(seconds: string): number {
	return Math.round(Number(seconds) / 60);
}

function metersToMi(meters: number): number {
	return Math.round(meters * 0.0006213712 * 10) / 10;
}

export async function computeActiveTransportRoute(options: {
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

export async function computeTransitRoute(options: {
	origin: string;
	dest: string;
	targetDeparture: TargetDate;
}): Promise<TransitRoute> {
	const { origin, dest, targetDeparture } = options;
	const actualDeparture = getNextDayTime(targetDeparture);
	const response = await ROUTES_CLIENT.computeRoutes(
		{
			origin: { address: origin },
			destination: { address: dest },
			travelMode: 'TRANSIT',
			departureTime: { seconds: actualDeparture.toMillis() / 1000 }
		},
		{
			otherArgs: {
				headers: {
					'Content-Type': 'application/json',
					'X-Goog-FieldMask':
						'routes.duration,routes.description,routes.legs.steps.transitDetails.transitLine.nameShort'
				}
			}
		}
	);
	const routes = response[0].routes;
	if (!routes || routes.length !== 1) {
		throw new Error(`Unexpected routes in response: ${routes}`);
	}
	const route = routes[0];

	if (!route.legs || route.legs.length !== 1) {
		throw new Error(`Unexpected legs in route: ${route.legs}`);
	}
	const leg = route.legs[0];

	const summary = leg
		.steps!.map((step) => {
			const name = step.transitDetails?.transitLine?.nameShort;
			return name?.replace(' Line', '').replace(' Train', '');
		})
		.filter((name) => name !== null && name !== undefined)
		.join(' -> ');
	return {
		timeMinutes: secondsStringToMinutes(route.duration!.seconds as string),
		summary
	};
}
