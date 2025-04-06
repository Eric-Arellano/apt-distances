<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult } from '$lib/types';

	let { closest, walk }: DistancesResult['park'] = $props();
</script>

<DestinationCard
	title="Park 🌳"
	goal="Must be within a 15-minute walk"
	routes={[`🚶 ${walk.timeMinutes} minutes to ${closest.name} (${walk.distanceMiles} miles)`]}
/>
