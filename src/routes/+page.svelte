<script lang="ts">
	import Address from '$lib/components/Address.svelte';
	import Destinations from '$lib/components/destinations/Destinations.svelte';
	import Neighborhoods from '$lib/components/Neighborhoods.svelte';
	let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="container mx-auto max-w-6xl px-4">
		<h1 class="mb-6 text-center text-3xl font-bold md:text-left">NYC apartment distances</h1>
		<Neighborhoods />
		<Address />
		<Destinations {...data.distances} />
	</div>
</div>
