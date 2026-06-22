<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
        <h1>food for thought</h1>
	
        <section>
		{#if data.posts.length === 0}
			<p>No posts yet.</p>
		{:else}
			{#each data.posts as post}
				<p>
					<a href="/blog/{post.slug}">{post.title}</a>
					{#if post.date}
						<br /><span class="marginnote">{post.date}</span>
					{/if}
					{#if post.categories.length > 0}
						<br /><span class="marginnote">
							{#each post.categories as cat, i}
								<a href="/blog/category/{cat}">#{cat}</a>{#if i < post.categories.length - 1}{' '}{/if}
							{/each}
						</span>
					{/if}
				</p>
			{/each}
		{/if}
	</section>
</article>
