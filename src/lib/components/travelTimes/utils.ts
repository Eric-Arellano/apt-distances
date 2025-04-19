import type { ActiveTransportRoute, TransitRoute } from '$lib/types';

export function transitRoute(route: TransitRoute): string {
	const mode = route.type === 'walking' ? 'by walking' : `on the ${route.summary}`;
	return `🚇 ${route.timeMinutes} minutes ${mode}`;
}

export function bikeRoute(route: ActiveTransportRoute): string {
	return `🚴 ${route.timeMinutes} minutes (${route.distanceMiles} miles)`;
}

export function walkRoute(route: ActiveTransportRoute): string {
	return `🚶 ${route.timeMinutes} minutes (${route.distanceMiles} miles)`;
}
