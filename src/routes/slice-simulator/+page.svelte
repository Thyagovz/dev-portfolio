<script>
	import { SliceSimulator, SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
</script>

<!-- Slot syntax is used for backward compatibility with Svelte <=4. -->
<SliceSimulator let:slices background="#222222">
	<SliceZone {slices} {components} />
</SliceSimulator>