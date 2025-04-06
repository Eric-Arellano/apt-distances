<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';

	let { transit }: TravelTimes['partner'] = $props();

	const idealMinutes = 20;
	const maxMinutes = 30;

	function goalStatus(): GoalStatus {
		if (transit.timeMinutes <= idealMinutes) {
			return 'met';
		}
		if (transit.timeMinutes <= maxMinutes) {
			return 'partial';
		}
		return 'unmet';
	}
</script>

<DestinationCard
	title="Partner 👬"
	goal="Must be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[`🚇 ${transit.timeMinutes} minutes on the ${transit.summary}`]}
	goalStatus={goalStatus()}
/>
