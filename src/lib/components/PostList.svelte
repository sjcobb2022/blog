<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Post } from '$lib/posts';

	let { posts }: { posts: Post[] } = $props();
</script>

{#each posts as post (post.slug)}
	<section>
		<h2>
			<a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
		</h2>
		<blockquote>
			{#if post.description}
				<p>{post.description}</p>
			{/if}
			<footer>
				{#if post.date}<div>{post.date}</div>{/if}
				{#if post.categories.length > 0}
					<div>
						{#each post.categories as cat, i (cat)}
							<a href={resolve('/blog/category/[category]', { category: cat })}>#{cat}</a>
							<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
							<!-- svelte-ignore block_empty -->
							{#if i < post.categories.length - 1}

							{/if}
						{/each}
					</div>
				{/if}
			</footer>
		</blockquote>
	</section>
{/each}
