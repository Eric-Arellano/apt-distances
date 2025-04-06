<script lang="ts">
	import Destinations from '$lib/components/destinations/Destinations.svelte';
	let { data } = $props();
</script>

<h1>NYC apartment distances</h1>
<Destinations {...data.distances} />
