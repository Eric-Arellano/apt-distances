import type TravelTimes from '$lib/components/travelTimes';
import { PARKS, SUBWAY_STOPS } from './candidateLocations';
import { findClosest } from './closestDest';
import { DayOfWeek } from './departureTime';
import { computeActiveTransportRoute, computeTransitRoute } from './gmapsRouting';

export async function computeWork(origin: string): Promise<TravelTimes['work']> {
	const dest = '1 Madison Ave, New York, NY 10010';
	return {
		walk: await computeActiveTransportRoute({ origin, dest, mode: 'WALK' }),
		bike: await computeActiveTransportRoute({ origin, dest, mode: 'BICYCLE' })
	};
}

export async function computePartner(origin: string): Promise<TravelTimes['partner']> {
	const transit = await computeTransitRoute({
		origin,
		dest: '282 West End Ave, New York, NY 10023',
		targetDeparture: { day: DayOfWeek.Saturday, hour: 20, minute: 30 }
	});
	return { transit };
}

export async function computeFractal(origin: string): Promise<TravelTimes['partner']> {
	const transit = await computeTransitRoute({
		origin,
		dest: '111 Conselyea St Floor 2, Brooklyn, NY 11211',
		targetDeparture: { day: DayOfWeek.Saturday, hour: 17, minute: 30 }
	});
	return { transit };
}

export async function computeChurch(origin: string): Promise<TravelTimes['partner']> {
	const transit = await computeTransitRoute({
		origin,
		dest: '119 Pierrepont, Brooklyn, NY 11201',
		targetDeparture: { day: DayOfWeek.Sunday, hour: 10, minute: 0 }
	});
	return { transit };
}

export async function computePark(origin: string): Promise<TravelTimes['park']> {
	const closest = await findClosest(origin, PARKS);
	const walk = await computeActiveTransportRoute({
		origin,
		dest: closest.address,
		mode: 'WALK'
	});
	return { walk, closest: { name: closest.name } };
}

export async function computeSubwayStop(origin: string): Promise<TravelTimes['subwayStop']> {
	const closest = await findClosest(origin, SUBWAY_STOPS);
	const walk = await computeActiveTransportRoute({
		origin,
		dest: closest.address,
		mode: 'WALK'
	});
	return { walk, closest: { name: closest.name, lines: closest.lines } };
}
