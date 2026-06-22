<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<h1>#{data.category}</h1>

	<section>
		{#each data.posts as post}
			<p>
				<a href="/blog/{post.slug}">{post.title}</a>
				{#if post.date}
					<br /><span class="marginnote">{post.date}</span>
				{/if}
			</p>
		{/each}
	</section>
</article>
