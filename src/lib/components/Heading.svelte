<script lang="ts">
	import clsx from 'clsx';

	interface Props {
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		size?: 'xl' | 'lg' | 'md' | 'sm';
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { 
		tag = 'h1', 
		size = 'lg', 
		class: className = '', 
		children, 
		...restProps 
	}: Props = $props();
</script>

<svelte:element
	this={tag}
	{...restProps}
	class={clsx(
		'font-bold leading-tight tracking-tight text-slate-300',
		size === 'xl' && 'text-7xl md:text-9xl',
		size === 'lg' && 'text-6xl md:text-8xl',
		size === 'md' && 'text-5xl md:text-6xl',
		size === 'sm' && 'text-3xl md:text-4xl',
		className
	)}
>
	{@render children?.()}
</svelte:element>
