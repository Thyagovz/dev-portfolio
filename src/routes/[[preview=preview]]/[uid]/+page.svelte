<script lang="ts">
	import { SliceZone } from "@prismicio/svelte";
	import { components } from "$lib/slices";

	let { data } = $props();
	$inspect(data.slices);
</script>

<SliceZone slices={data.slices} {components} />
