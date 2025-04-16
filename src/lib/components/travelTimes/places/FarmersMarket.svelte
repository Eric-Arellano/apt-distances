<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';
	let { closest, walk }: TravelTimes['farmersMarket'] = $props();

	const idealMinutes = 15;
	const maxMinutes = 20;
	function goalStatus(): GoalStatus {
		if (walk.timeMinutes <= idealMinutes) {
			return 'met';
		}
		if (walk.timeMinutes <= maxMinutes) {
			return 'partial';
		}
		return 'unmet';
	}
</script>

<DestinationCard
	title="Farmers market 🍉 (low priority)"
	goal="Should be within a {maxMinutes}-minute walk; ideally within {idealMinutes} minutes"
	routes={[`🚶 ${walk.timeMinutes} minutes to ${closest.name} (${walk.distanceMiles} miles)`]}
	goalStatus={goalStatus()}
/>
