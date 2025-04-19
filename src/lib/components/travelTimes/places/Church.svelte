<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes } from '$lib/types';
	import { goalStatus, transitRoute } from '../utils';

	let { transit }: TravelTimes['church'] = $props();

	const idealMinutes = 30;
	const maxMinutes = 40;
</script>

<DestinationCard
	title="Church ⛪️ (low priority) "
	goal="Should be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[transitRoute(transit)]}
	goalStatus={goalStatus([transit], { idealMinutes, maxMinutes })}
/>
