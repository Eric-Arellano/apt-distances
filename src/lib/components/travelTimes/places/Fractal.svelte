<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';

	let { transit }: TravelTimes['fractal'] = $props();

	const maxMinutes = 30;

	function goalStatus(): GoalStatus {
		return transit.timeMinutes <= maxMinutes ? 'met' : 'unmet';
	}
</script>

<DestinationCard
	title="Fractal 🪩"
	goal="Ideally within {maxMinutes} minutes (low priority)"
	routes={[`🚇 ${transit.timeMinutes} minutes on the ${transit.summary}`]}
	goalStatus={goalStatus()}
/>
