<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<data.content />

	{#if data.categories.length > 0}
		<section>
			<p>
				{#each data.categories as cat, i (cat)}
					<a href={resolve('/blog/category/[category]', { category: cat })}>#{cat}</a>
					<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
					<!-- svelte-ignore block_empty -->
					{#if i < data.categories.length - 1}

					{/if}
				{/each}
			</p>
		</section>
	{/if}
</article>

<style>
	article {
		counter-reset: sidenote-counter;
	}
</style>
