<script lang="ts">
	import authState from '$lib/state/auth.svelte';

	let password = '';
</script>

<div class="flex flex-col space-y-3 rounded-md border border-blue-200 bg-blue-50 p-4">
	<p>🔒 Enter the site's password</p>
	<form
		onsubmit={(event) => {
			event.preventDefault();
			authState.isAuthenticated = true;
		}}
		class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"
	>
		<div class="flex-grow">
			<input
				type="password"
				bind:value={password}
				class="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				aria-label="Password"
			/>
		</div>
		<div>
			<button
				class="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400 disabled:opacity-50 disabled:hover:bg-blue-400 sm:w-auto"
				disabled={!password}
				type="submit"
			>
				Unlock
			</button>
		</div>
	</form>
</div>
