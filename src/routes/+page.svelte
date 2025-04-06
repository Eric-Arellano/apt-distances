<script lang="ts">
	import Address from '$lib/components/address';
	import TravelTimes from '$lib/components/travelTimes/index.js';
	import Neighborhoods from '$lib/components/Neighborhoods.svelte';
	import OtherCriteria from '$lib/components/criteria';
	let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="container mx-auto max-w-6xl px-4">
		<h1 class="mb-6 text-center text-3xl font-bold md:text-left">NYC apartment distances</h1>
		<Neighborhoods />
		<Address />
		<TravelTimes {...data.travelTimes} />
		<OtherCriteria />
	</div>
</div>
