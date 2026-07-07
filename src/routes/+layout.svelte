<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/urbanist";
  import { page } from "$app/state";
  import * as prismic from "@prismicio/client";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import type { LayoutData } from "./$types";

  let { children, data }: { children: any; data: LayoutData } = $props();

  let titleText = $derived(
    page.data?.page?.data?.meta_title || "Thyago Euclides | Portfolio",
  );

  let descriptionText = $derived(
    page.data?.page?.data?.meta_description ||
      "Desenvolvedor Criativo especializado em experiências 3D e web corporativa.",
  );
</script>

<svelte:head>
  <title>{titleText}</title>
  {#if descriptionText}
    <meta name="description" content={descriptionText} />
  {/if}
</svelte:head>

<Header settings={data.settings} />

<main class="relative min-h-screen">
  {@render children()}
</main>

<div class="background-gradient absolute inset-0 -z-50 max-h-screen" />
<div
  class="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('noisetexture.jpg')] opacity-20 mix-blend-soft-light"
></div>


<Footer settings={data.settings} />
