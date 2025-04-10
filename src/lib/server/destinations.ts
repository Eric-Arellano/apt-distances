import type TravelTimes from '$lib/components/travelTimes';
import { findClosest } from './closestDest';
import { DayOfWeek } from './departureTime';
import { computeActiveTransportRoute, computeTransitRoute } from './gmapsRouting';

const PARKS = [
	{
		name: 'Madison Square Park',
		latitude: 40.742017,
		longitude: -73.987979,
		address: '11 Madison Ave, New York, NY 10010'
	},
	{
		name: 'Union Square Park',
		latitude: 40.735881,
		longitude: -73.99077,
		address: '201 Park Ave S, New York, NY 10003'
	},
	{
		name: 'Chelsea Park',
		latitude: 40.749997,
		longitude: -74.000948,
		address: 'West 27th Street &, 9th Ave, New York, NY 10001'
	},
	{
		name: 'Bella Abzug Park',
		latitude: 40.755573,
		longitude: -74.000439,
		address: '542 W 36th St., New York, NY 10018'
	},
	{
		name: 'Chelsea Waterside',
		latitude: 40.749376,
		longitude: -74.008715,
		address: '557 W 23rd St, New York, NY 10011'
	},
	{
		name: 'Little Island',
		latitude: 40.741882,
		longitude: -74.01069,
		address: 'Little Island, New York, NY 10014'
	},
	{
		name: 'Stuyvesant Square Park',
		latitude: 40.733695,
		longitude: -73.984277,
		address: '9 Rutherford Pl, New York, NY 10003'
	},
	{
		name: 'High Line (30th St)',
		latitude: 40.752536,
		longitude: -74.002212,
		address: '518 W 30th St, New York, NY 10001'
	},
	{
		name: 'High Line (23rd St)',
		latitude: 40.747944,
		longitude: -74.004683,
		address: '509 W 23rd St, New York, NY 10011'
	},
	{
		name: 'High Line (14th St)',
		latitude: 40.742006,
		longitude: -74.007829,
		address: '472 W 14th St, New York, NY 10014'
	}
];

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
