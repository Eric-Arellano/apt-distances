<script>
	import Card from './Card.svelte';

	const neighborhoods = [
		'Flatiron',
		'NoMad',
		'Gramercy Park',
		'Midtown Central',
		'Midtown South',
		'Hudson Yards',
		'Chelsea',
		'Kips Bay',
		"Hell's Kitchen",
		'Murray Hill'
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
