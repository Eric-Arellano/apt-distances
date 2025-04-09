import type TravelTimes from '$lib/components/travelTimes';
import { DayOfWeek } from './departureTime';
import { computeActiveTransportRoute, computeTransitRoute } from './gmaps';

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
