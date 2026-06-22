<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<h1>#{data.category}</h1>

	<PostList posts={data.posts} />
</article>
