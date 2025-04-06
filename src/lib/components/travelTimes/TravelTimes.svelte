<script lang="ts">
	import Card from '../Card.svelte';
	import travelTimesState from '$lib/state/travelTimes.svelte';
	import Church from './places/Church.svelte';
	import FarmersMarket from './places/FarmersMarket.svelte';
	import Fractal from './places/Fractal.svelte';
	import Park from './places/Park.svelte';
	import Partner from './places/Partner.svelte';
	import SubwayStop from './places/SubwayStop.svelte';
	import Work from './places/Work.svelte';
</script>

{#if travelTimesState.status !== 'unset'}
	<Card title="Travel times">
		{#if travelTimesState.status === 'loading'}
			<p>Loading!</p>
		{:else if travelTimesState.status === 'success'}
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Work {...travelTimesState.result.work} />
				<Partner {...travelTimesState.result.partner} />
				<SubwayStop {...travelTimesState.result.subwayStop} />
				<Park {...travelTimesState.result.park} />
				<FarmersMarket {...travelTimesState.result.farmersMarket} />
				<Fractal {...travelTimesState.result.fractal} />
				<Church {...travelTimesState.result.church} />
			</div>
		{:else}
			<p>Error: {travelTimesState.error}</p>
		{/if}
	</Card>
{/if}
