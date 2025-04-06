<script lang="ts">
	import type { GoalStatus } from '$lib/types';

	interface Props {
		title: string;
		goal: string;
		routes: string[];
		goalStatus: GoalStatus;
	}

	const { title, goal, routes, goalStatus }: Props = $props();
</script>

<div
	class="mb-4 rounded-lg border-l-4 bg-gray-50 p-4 shadow-md transition-shadow hover:shadow-lg {goalStatus ===
	'met'
		? 'border-green-500'
		: goalStatus === 'partial'
			? 'border-yellow-500'
			: 'border-red-500'}"
>
	<h2 class="mb-2 text-xl font-bold">{title}</h2>
	<p class="mb-3 text-sm text-gray-700 italic">{goal}</p>

	<div class="space-y-2">
		{#each routes as route (route)}
			<div class="flex items-start">
				<div class="w-full rounded bg-white p-2 shadow-sm">
					{route}
				</div>
			</div>
		{/each}
	</div>
</div>
