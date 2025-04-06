<script lang="ts">
	import Card from '../Card.svelte';
	import Loading from './Loading.svelte';
	import Error from './Error.svelte';
	import Success from './Success.svelte';
	import travelTimesState from '$lib/state/travelTimes.svelte';
</script>

{#if travelTimesState.status !== 'unset'}
	<Card title="Travel times">
		{#if travelTimesState.status === 'loading'}
			<Loading />
		{:else if travelTimesState.status === 'success'}
			<Success {...travelTimesState.result} />
		{:else}
			<Error error={travelTimesState.error} />
		{/if}
	</Card>
{/if}
