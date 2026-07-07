<script lang="ts">
  import clsx from "clsx";

  interface Props {
    tag?: string;
    class?: string;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  let {
    tag = "section",
    class: className,
    children,
    ...restProps
  }: Props = $props();
</script>

<svelte:element
  this={tag}
  {...restProps}
  class={clsx(`px-4 py-10 md:px-6 md:py-14 lg:py-16`, className)}
>
  <div class="mx-auto w-full max-w-7xl">
    {@render children?.()}
  </div>
</svelte:element>
