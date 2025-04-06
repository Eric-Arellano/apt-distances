<script lang="ts">
	import Destinations from '$lib/components/destinations/Destinations.svelte';
	let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="container mx-auto max-w-6xl px-4">
		<h1 class="mb-8 text-center text-3xl font-bold md:text-left">NYC apartment distances</h1>
		<Destinations {...data.distances} />
	</div>
</div>
