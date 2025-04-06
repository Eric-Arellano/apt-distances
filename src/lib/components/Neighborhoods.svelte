<script>
	const neighborhoods = [
		'Flatiron',
		'Hudson Yards',
		'NoMad',
		'Gramercy Park',
		'Chelsea',
		'Kips Bay'
	];
</script>

<div class="mb-4">
	<h2 class="mb-2 text-xl font-medium font-semibold text-gray-900">Candidate Neighborhoods</h2>

	<div class="max-w-3xs">
		<ul class="grid list-none grid-cols-2 gap-y-1">
			{#each neighborhoods as neighborhood (neighborhood)}
				<li class="flex items-start">
					<span class="mr-1.5 text-gray-600">•</span>
					<span class="text-gray-800">{neighborhood}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
