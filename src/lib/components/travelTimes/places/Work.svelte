<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';

	let { walk, bike }: TravelTimes['work'] = $props();

	const idealMinutes = 10;
	const maxMinutes = 15;

	function goalStatus(): GoalStatus {
		if (walk.timeMinutes <= idealMinutes || bike.timeMinutes <= idealMinutes) {
			return 'met';
		}
		if (walk.timeMinutes <= maxMinutes || bike.timeMinutes <= maxMinutes) {
			return 'partial';
		}
		return 'unmet';
	}
</script>

<DestinationCard
	title="Work 👨🏼‍💻"
	goal="Must be within {maxMinutes} minutes by bike or walking; ideally within {idealMinutes} minutes"
	routes={[
		`🚶 ${walk.timeMinutes} minutes (${walk.distanceMiles} miles)`,
		`🚴 ${bike.timeMinutes} minutes (${bike.distanceMiles} miles)`
	]}
	goalStatus={goalStatus()}
/>
