<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult } from '$lib/types';

	let { closest, walk }: DistancesResult['farmersMarket'] = $props();
</script>

<DestinationCard
	title="Farmers market 🍉"
	goal="Ideally within a 15-minute walk (low priority)"
	routes={[`🚶 ${walk.timeMinutes} minutes to ${closest.name} (${walk.distanceMiles} miles)`]}
/>
