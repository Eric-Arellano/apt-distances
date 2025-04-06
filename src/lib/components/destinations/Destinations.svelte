<script lang="ts">
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

<div class="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
	<h2 class="mb-2 text-xl font-medium font-semibold text-gray-900">Travel times</h2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		<Work {...distances.work} />
		<Partner {...distances.partner} />
		<SubwayStop {...distances.subwayStop} />
		<Park {...distances.park} />
		<FarmersMarket {...distances.farmersMarket} />
		<Fractal {...distances.fractal} />
		<Church {...distances.church} />
	</div>
</div>
