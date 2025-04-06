<script lang="ts">
	import DestinationCard from '$lib/components/DestinationCard.svelte';
	import type { DistancesResult, GoalStatus } from '$lib/types';

	let { closest, walk }: DistancesResult['farmersMarket'] = $props();

	const maxMinutes = 15;

	function goalStatus(): GoalStatus {
		return walk.timeMinutes <= maxMinutes ? 'met' : 'unmet';
	}
</script>

<DestinationCard
	title="Farmers market 🍉"
	goal="Ideally within a {maxMinutes}-minute walk (low priority)"
	routes={[`🚶 ${walk.timeMinutes} minutes to ${closest.name} (${walk.distanceMiles} miles)`]}
	goalStatus={goalStatus()}
/>
