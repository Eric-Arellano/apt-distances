<script>
	import Card from './Card.svelte';

	const neighborhoods = [
		'Flatiron',
		'Hudson Yards',
		'NoMad',
		'Gramercy Park',
		'Chelsea',
		'Kips Bay'
	];
</script>

<Card title="Candidate neighborhoods">
	<div class="max-w-3xs">
		<ul class="grid list-disc grid-cols-2 gap-y-1 pl-5">
			{#each neighborhoods as neighborhood (neighborhood)}
				<li>{neighborhood}</li>
			{/each}
		</ul>
	</div>
</Card>
