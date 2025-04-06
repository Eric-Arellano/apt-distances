<script lang="ts">
	import Church from '$lib/components/destinations/Church.svelte';
	import FarmersMarket from '$lib/components/destinations/FarmersMarket.svelte';
	import Fractal from '$lib/components/destinations/Fractal.svelte';
	import Park from '$lib/components/destinations/Park.svelte';
	import Partner from '$lib/components/destinations/Partner.svelte';
	import SubwayStop from '$lib/components/destinations/SubwayStop.svelte';
	import Work from '$lib/components/destinations/Work.svelte';
	let { data } = $props();
</script>

<h1>NYC apartment distances</h1>

<Work {...data.distances.work} />
<Partner {...data.distances.partner} />
<SubwayStop {...data.distances.subwayStop} />
<Park {...data.distances.park} />
<FarmersMarket {...data.distances.farmersMarket} />
<Fractal {...data.distances.fractal} />
<Church {...data.distances.church} />
