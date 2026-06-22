<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<data.content />

	{#if data.categories.length > 0}
		<section>
			<p>
				{#each data.categories as cat, i}
					<a href="/blog/category/{cat}">#{cat}</a>{#if i < data.categories.length - 1}{' '}{/if}
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
