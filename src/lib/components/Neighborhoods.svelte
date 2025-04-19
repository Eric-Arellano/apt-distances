<script>
	import Card from './Card.svelte';

	const neighborhoods = [
		'Upper West Side',
		'Flatiron',
		'Hudson Yards',
		'NoMad',
		'Gramercy Park',
		'Chelsea',
		'Kips Bay'
	];
</script>

<Card title="Candidate neighborhoods">
	<div class="sm:max-w-sm">
		<ul class="list-disc pl-5 sm:grid sm:grid-cols-2 sm:gap-y-1">
			{#each neighborhoods as neighborhood (neighborhood)}
				<li>{neighborhood}</li>
			{/each}
		</ul>
	</div>
</Card>
