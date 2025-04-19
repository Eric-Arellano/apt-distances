<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';
	import { bikeRoute, transitRoute, walkRoute } from '../utils';

	let { walk, bike, transit }: TravelTimes['work'] = $props();

	const idealMinutes = 15;
	const maxMinutes = 25;

	function goalStatus(): GoalStatus {
		const minTime = Math.min(walk.timeMinutes, bike.timeMinutes, transit.timeMinutes);
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
	title="Work 👨🏼‍💻"
	goal="Must be within {maxMinutes} minutes; ideally within {idealMinutes} minutes"
	routes={[transitRoute(transit), bikeRoute(bike), walkRoute(walk)]}
	goalStatus={goalStatus()}
/>
