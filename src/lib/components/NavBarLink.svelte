<script lang="ts">
  import { page } from "$app/state";
  import { asLink, type KeyTextField, type LinkField } from "@prismicio/client";

  // Captura as propriedades enviadas pelo Header
  let {
    field,
    label,
    onLinkClick,
    type,
  }: {
    field: LinkField;
    label: KeyTextField;
    onLinkClick: () => void;
    type: "desktop" | "mobile";
  } = $props();

  // Simplificado: Sem a função extra. O Svelte 5 atualiza automaticamente 
  // sempre que o objeto 'field' mudar ou for carregado.
  const path = $derived(asLink(field) || (field as any)?.url || "#");
  
  // Compara de forma limpa a rota atual com a rota do link
  let isActive = $derived(
    path !== "#" && 
    page.url.pathname.replace(/\/$/, "") === path.replace(/\/$/, "")
  );

  // Bloco de efeito para ver o texto final exato no console
  $effect(() => {
    console.log(`Link [${label}]:`, path);
  });
</script>

{#if type === "desktop"}
  <a
    href={path}
    class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
    onclick={onLinkClick}
    aria-current={isActive ? "page" : undefined}
  >
    <span
      class={`absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-6" : "translate-y-8"}`}
    ></span>
    <span class="relative">
      {label}
    </span>
  </a>
{:else}
  <a
    href={path}
    class="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
    onclick={onLinkClick}
    aria-current={isActive ? "page" : undefined}
  >
    <span
      class={`absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-6" : "translate-y-16"}`}
    ></span>
    <span class="relative">
      {label}
    </span>
  </a>
{/if}

