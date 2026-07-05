<script lang="ts">
  import { SliceZone, SliceSimulator } from "@prismicio/svelte";
  import { components } from "$lib/slices";
</script>

<!-- Passando o children diretamente como propriedade do componente -->
<SliceSimulator
  children={(props) => SliceZone({ slices: props.slices, components })}
/>
