<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes } from '$lib/types';
	import { goalStatus, walkRoute } from '../utils';

	let { closest, walk }: TravelTimes['farmersMarket'] = $props();

	const idealMinutes = 15;
	const maxMinutes = 20;
</script>

<DestinationCard
	title="Farmers market 🍉 (low priority)"
	goal="Should be within a {maxMinutes}-minute walk; ideally within {idealMinutes} minutes"
	routes={[walkRoute(walk, { name: closest.name })]}
	goalStatus={goalStatus([walk], { idealMinutes, maxMinutes })}
/>
