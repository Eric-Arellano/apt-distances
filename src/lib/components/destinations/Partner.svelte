<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult } from '$lib/types';

	let { transit }: DistancesResult['partner'] = $props();
</script>

<DestinationCard
	title="Partner 👬"
	goal="Must be within 30 minutes; ideally within 20 minutes"
	routes={[`🚇 ${transit.timeMinutes} minutes on the ${transit.summary}`]}
/>
