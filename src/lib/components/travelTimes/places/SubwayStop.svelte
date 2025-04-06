<script lang="ts">
	import DestinationCard from '../DestinationCard.svelte';
	import type { TravelTimes, GoalStatus } from '$lib/types';

	let { closest, walk }: TravelTimes['subwayStop'] = $props();

	const idealMinutes = 7;
	const maxMinutes = 12;

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
	title="Subway stop 🚇"
	goal="Must be within a {maxMinutes}-minute walk; ideally within {idealMinutes} minutes"
	routes={[
		`🚶 ${walk.timeMinutes} minutes to ${closest.name} with ${closest.lines.join(', ')} (${walk.distanceMiles} miles)`
	]}
	goalStatus={goalStatus()}
/>
