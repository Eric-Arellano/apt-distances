<script lang="ts">
	import Church from './places/Church.svelte';
	import FarmersMarket from './places/FarmersMarket.svelte';
	import Park from './places/Park.svelte';
	import SubwayStop from './places/SubwayStop.svelte';
	import Work from './places/Work.svelte';
	import type { TravelTimes } from '$lib/types.js';

	const travelTimes: TravelTimes = $props();
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
	<Work {...travelTimes.work} />
	<SubwayStop {...travelTimes.subwayStop} />
	<Park {...travelTimes.park} />
	<FarmersMarket {...travelTimes.farmersMarket} />
	<Church {...travelTimes.church} />
</div>
