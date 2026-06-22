<script lang="ts">
	import favicon from '$lib/assets/favicon/favicon_16x16.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

{@render children()}

<footer>
	<nav>
		<a href="/rss.xml">RSS</a>
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
