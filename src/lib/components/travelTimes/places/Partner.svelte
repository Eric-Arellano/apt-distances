<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes } from '$lib/types';
	import { goalStatus, transitRoute, walkRoute } from '../utils';

	let { walk, transit }: TravelTimes['partner'] = $props();

	const idealMinutes = 20;
	const maxMinutes = 30;
</script>

<DestinationCard
	title="Partner 👬"
	goal="Must be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[transitRoute(transit), walkRoute(walk)]}
	goalStatus={goalStatus([walk, transit], { idealMinutes, maxMinutes })}
/>
