<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult } from '$lib/types';

	let { closest, walk }: DistancesResult['subwayStop'] = $props();
</script>

<DestinationCard
	title="Subway stop 🚇"
	goal="Must be within a 12-minute walk; ideally within 7 minutes"
	routes={[
		`🚶 ${walk.timeMinutes} minutes to ${closest.name} with ${closest.lines.join(', ')} (${walk.distanceMiles} miles)`
	]}
/>
