<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
Placeholder component for {slice.slice_type} (variation: {slice.variation}) slices.
<br />
<strong>You can edit this slice directly in your code editor.</strong>
</section>