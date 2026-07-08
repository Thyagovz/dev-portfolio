<script lang="ts">
  import type { PageProps } from "./$types";
  import ContentBody from "$lib/components/ContentBody.svelte";
  import type { Content } from "@prismicio/client";

  let { data }: PageProps & { 
    data: { page: Content.BlogpostDocument | Content.ProjectDocument } 
  } = $props();

</script>

<ContentBody page={data.page} />
