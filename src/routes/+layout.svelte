<script lang="ts">
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64x64.png" />
	<link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png" />
	<link rel="icon" type="image/png" sizes="256x256" href="/favicon/favicon-256x256.png" />
	<link rel="icon" type="image/png" sizes="512x512" href="/favicon/favicon-512x512.png" />
	<link rel="apple-touch-icon" sizes="1024x1024" href="/favicon/favicon-1024x1024.png" />
</svelte:head>

<header>
	<nav>
		<a href={resolve('/')}>home</a>
		<a href={resolve('/about')}>about</a>
		<a href={resolve('/projects')}>projects</a>
		<a href={resolve('/contact')}>contact</a>
	</nav>
</header>

{@render children()}

<footer>
	<nav>
		<a href={resolve('/rss.xml')}>RSS</a>
		<a href="https://github.com/sjcobb2022/blog">impl Blog</a>
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
