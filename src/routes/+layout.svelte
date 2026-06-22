<script lang="ts">
	import favicon from '$lib/assets/favicon/favicon_16x16.png';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/about')}>About</a>
		<a href={resolve('/projects')}>Projects</a>
		<a href={resolve('/contact')}>Contact</a>
	</nav>
</header>

{@render children()}

<footer>
	<nav>
		<a href={resolve('/rss.xml')}>RSS</a>
		<a href="https://github.com/sjcobb2022/blog">impl</a>
		<a href="https://github.com/sjcobb2022">GitHub</a>
	</nav>
</footer>

<style>
	nav {
		font-size: 1.4rem;
	}

	nav a {
		margin-right: 1.5rem;
	}
</style>
