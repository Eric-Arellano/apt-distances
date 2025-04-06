<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { DistancesResult, GoalStatus } from '$lib/types';

	let { closest, walk }: DistancesResult['park'] = $props();

	const maxMinutes = 15;

	function goalStatus(): GoalStatus {
		return walk.timeMinutes <= maxMinutes ? 'met' : 'unmet';
	}
</script>

<DestinationCard
	title="Park 🌳"
	goal="Must be within a {maxMinutes}-minute walk"
	routes={[`🚶 ${walk.timeMinutes} minutes to ${closest.name} (${walk.distanceMiles} miles)`]}
	goalStatus={goalStatus()}
/>
