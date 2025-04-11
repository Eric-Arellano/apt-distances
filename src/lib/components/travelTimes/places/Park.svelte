<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';

	let { closest, walk }: TravelTimes['park'] = $props();

	const idealMinutes = 10;
	const maxMinutes = 15;

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
	title="Park 🌳"
	goal="Must be within a {maxMinutes}-minute walk; ideally within 10 minutes"
	routes={[`🚶 ${walk.timeMinutes} minutes to ${closest.name} (${walk.distanceMiles} miles)`]}
	goalStatus={goalStatus()}
/>
