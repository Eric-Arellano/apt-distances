<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';

	let { transit }: TravelTimes['fractal'] = $props();

	const idealMinutes = 30;
	const maxMinutes = 40;

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
	title="Fractal 🪩 (low priority)"
	goal="Should be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[`🚇 ${transit.timeMinutes} minutes on the ${transit.summary}`]}
	goalStatus={goalStatus()}
/>
