<script lang="ts">
  import Bounded from "$lib/components/Bounded.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import type { Content } from "@prismicio/client";
  import { isFilled } from "@prismicio/client";
  import { PrismicRichText, type SliceComponentProps } from "@prismicio/svelte";

  type Props = SliceComponentProps<Content.ContentIndexSlice> & {
    items: Content.BlogpostDocument[] | Content.ProjectDocument[];
  };

  let { slice, items }: Props = $props();
</script>

<Bounded
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <Heading size="xl" class="mb-8">
    {slice.primary.heading}
  </Heading>
  {#if isFilled.richText(slice.primary.description)}
    <div class="prose prose-xl prose-invert mb-10">
      <PrismicRichText field={slice.primary.description} />
    </div>
  {/if}
</Bounded>
