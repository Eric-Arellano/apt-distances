<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult } from '$lib/types';

	let { walk, bike }: DistancesResult['work'] = $props();
</script>

<DestinationCard
	title="Work 👨🏼‍💻"
	goal="Must be within 15 minutes by bike or walking; ideally within 10 minutes"
	routes={[
		`🚶 ${walk.timeMinutes} minutes (${walk.distanceMiles} miles)`,
		`🚴 ${bike.timeMinutes} minutes (${bike.distanceMiles} miles)`
	]}
/>
