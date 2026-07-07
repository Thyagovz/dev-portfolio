<script lang="ts">
  import Bounded from "$lib/components/Bounded.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import type { Content } from "@prismicio/client";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import IconCircle from "~icons/ic/baseline-circle";

  gsap.registerPlugin(ScrollTrigger);

  let { slice }: { slice: Content.TechListSlice } = $props();

  let component: HTMLElement | undefined = $state();
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  class="overflow-hidden"
  bind:this={component}
>
  <Bounded as="div">
    <Heading size="xl" class="mb-8" tag="h2">
      {slice.primary.heading}
    </Heading>
  </Bounded>

  {#each slice.primary.item as item}
    <div
      class="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
      aria-label={item.tech_name || undefined}
    >
      {#each Array.from({ length: 15 }) as _, index}
        <span
          class="tech-item text-8xl font-extrabold uppercase tracking-tighter"
          style="color: {index === 7 && item.tech_color
            ? item.tech_color
            : 'inherit'}"
        >
          {item.tech_name}
        </span>
        <span class="text-3xl">
          <IconCircle />
        </span>
      {/each}
    </div>
  {/each}
</section>
