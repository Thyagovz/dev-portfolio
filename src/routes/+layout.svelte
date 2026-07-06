<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/urbanist";
  import { page } from "$app/state";
  import * as prismic from "@prismicio/client";

  let { children } = $props();

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

<header>Header</header>

<main></main>

<div class="background-gradient absolute inset-0 -z-50 max-h-screen" />
<div
  class="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('noisetexture.jpg')] opacity-20 mix-blend-soft-light"
></div>

{@render children()}
<footer>Footer</footer>
