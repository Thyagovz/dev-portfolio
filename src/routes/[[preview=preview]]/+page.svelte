<script lang="ts">
	import { SliceZone } from "@prismicio/svelte";
	import { components } from "$lib/slices";

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.page.data.meta_title}</title>
	<meta name="description" content={data.page.data.meta_description} />
</svelte:head>

<SliceZone slices={data.page.data.slices} {components} />
