<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes } from '$lib/types';
	import { goalStatus } from '../utils';

	let { closest, walk }: TravelTimes['subwayStop'] = $props();

	const idealMinutes = 7;
	const maxMinutes = 12;
</script>

<DestinationCard
	title="Subway stop 🚇"
	goal="Must be within a {maxMinutes}-minute walk; ideally within {idealMinutes} minutes"
	routes={[
		`🚶 ${walk.timeMinutes} minutes to ${closest.name} with ${closest.lines.join(', ')} (${walk.distanceMiles} miles)`
	]}
	goalStatus={goalStatus([walk], { idealMinutes, maxMinutes })}
/>
