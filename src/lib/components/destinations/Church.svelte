<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult } from '$lib/types';

	let { transit }: DistancesResult['church'] = $props();
</script>

<DestinationCard
	title="Church ⛪️ "
	goal="Ideally within 30 minutes (low priority)"
	routes={[`🚇 ${transit.timeMinutes} minutes on the ${transit.summary}`]}
/>
