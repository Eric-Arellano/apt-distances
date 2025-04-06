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
	<div class="max-w-2xs">
		<ul class="grid list-none grid-cols-2 gap-y-1">
			{#each neighborhoods as neighborhood (neighborhood)}
				<li class="flex items-start">
					<span class="mr-1.5 text-gray-600">•</span>
					<span class="text-gray-800">{neighborhood}</span>
				</li>
			{/each}
		</ul>
	</div>
</Card>
