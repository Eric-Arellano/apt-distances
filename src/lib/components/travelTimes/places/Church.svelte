<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';
	import { transitRoute } from '../utils';

	let { transit }: TravelTimes['church'] = $props();

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
	title="Church ⛪️ (low priority) "
	goal="Should be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[transitRoute(transit)]}
	goalStatus={goalStatus()}
/>
