import type TravelTimes from '$lib/components/travelTimes';
import { FARMERS_MARKETS, PARKS, SUBWAY_STOPS } from './candidateLocations';
import { findClosest, type CoordinatePoint } from './closestDest';
import { DayOfWeek } from './departureTime';
import { computeActiveTransportRoute, computeTransitRoute } from './gmapsRouting';

export async function computeWork(origin: string): Promise<TravelTimes['work']> {
	const dest = '1 Madison Ave, New York, NY 10010';
	return {
		walk: await computeActiveTransportRoute({ origin, dest, mode: 'WALK' }),
		bike: await computeActiveTransportRoute({ origin, dest, mode: 'BICYCLE' }),
		transit: await computeTransitRoute({
			origin,
			dest,
			targetDeparture: { day: DayOfWeek.Monday, hour: 8, minute: 45 }
		})
	};
}

export async function computePartner(origin: string): Promise<TravelTimes['partner']> {
	const dest = '282 West End Ave, New York, NY 10023';
	return {
		walk: await computeActiveTransportRoute({ origin, dest, mode: 'WALK' }),
		transit: await computeTransitRoute({
			origin,
			dest,
			targetDeparture: { day: DayOfWeek.Saturday, hour: 20, minute: 30 }
		})
	};
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

export async function computeFarmersMarket(
	originAddr: string,
	originPoint: CoordinatePoint
): Promise<TravelTimes['farmersMarket']> {
	const closest = findClosest(originPoint, FARMERS_MARKETS);
	const walk = await computeActiveTransportRoute({
		origin: originAddr,
		dest: closest.address,
		mode: 'WALK'
	});
	return { walk, closest: { name: closest.name } };
}

export async function computePark(
	originAddr: string,
	originPoint: CoordinatePoint
): Promise<TravelTimes['park']> {
	const closest = findClosest(originPoint, PARKS);
	const walk = await computeActiveTransportRoute({
		origin: originAddr,
		dest: closest.address,
		mode: 'WALK'
	});
	return { walk, closest: { name: closest.name } };
}

export async function computeSubwayStop(
	originAddr: string,
	originPoint: CoordinatePoint
): Promise<TravelTimes['subwayStop']> {
	const closest = findClosest(originPoint, SUBWAY_STOPS);
	const walk = await computeActiveTransportRoute({
		origin: originAddr,
		dest: closest.address,
		mode: 'WALK'
	});
	return { walk, closest: { name: closest.name, lines: closest.lines } };
}
