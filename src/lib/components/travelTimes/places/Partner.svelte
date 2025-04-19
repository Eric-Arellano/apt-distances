<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';
	import { transitRoute, walkRoute } from '../utils';

	let { walk, transit }: TravelTimes['partner'] = $props();

	const idealMinutes = 20;
	const maxMinutes = 30;

	function goalStatus(): GoalStatus {
		const minTime = Math.min(walk.timeMinutes, transit.timeMinutes);
		if (minTime <= idealMinutes) {
			return 'met';
		}
		if (minTime <= maxMinutes) {
			return 'partial';
		}
		return 'unmet';
	}
</script>

<DestinationCard
	title="Partner 👬"
	goal="Must be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[transitRoute(transit), walkRoute(walk)]}
	goalStatus={goalStatus()}
/>
