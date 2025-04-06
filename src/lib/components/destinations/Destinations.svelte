<script lang="ts">
	import Card from '../Card.svelte';
	import type { DistancesResult } from '$lib/types';
	import Church from './places//Church.svelte';
	import FarmersMarket from './places/FarmersMarket.svelte';
	import Fractal from './places//Fractal.svelte';
	import Park from './places/Park.svelte';
	import Partner from './places//Partner.svelte';
	import SubwayStop from './places//SubwayStop.svelte';
	import Work from './places/Work.svelte';

	let distances: DistancesResult = $props();
</script>

<Card title="Travel times">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		<Work {...distances.work} />
		<Partner {...distances.partner} />
		<SubwayStop {...distances.subwayStop} />
		<Park {...distances.park} />
		<FarmersMarket {...distances.farmersMarket} />
		<Fractal {...distances.fractal} />
		<Church {...distances.church} />
	</div>
</Card>
