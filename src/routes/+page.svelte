<script lang="ts">
	let { data } = $props();
</script>

<h1>NYC apartment distances</h1>
<h2>Work</h2>
<p>Walk: {data.distances.work.walk.time_m} minutes</p>
<p>Bike: {data.distances.work.bike.time_m} minutes</p>
