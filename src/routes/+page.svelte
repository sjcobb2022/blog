<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<h1>thought for food</h1>

	{#if data.posts.length === 0}
		<section>
			<p>No posts yet.</p>
		</section>
	{:else}
		<PostList posts={data.posts} />
	{/if}
</article>
