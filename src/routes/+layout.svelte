<script lang="ts">
	import { resolve, asset } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={asset('/favicon.ico')} />
	<link rel="icon" type="image/png" sizes="16x16" href={asset('/favicon/favicon-16x16.png')} />
	<link rel="icon" type="image/png" sizes="32x32" href={asset('/favicon/favicon-32x32.png')} />
	<link rel="icon" type="image/png" sizes="64x64" href={asset('/favicon/favicon-64x64.png')} />
	<link rel="icon" type="image/png" sizes="128x128" href={asset('/favicon/favicon-128x128.png')} />
	<link rel="icon" type="image/png" sizes="256x256" href={asset('/favicon/favicon-256x256.png')} />
	<link rel="icon" type="image/png" sizes="512x512" href={asset('/favicon/favicon-512x512.png')} />
	<link rel="apple-touch-icon" sizes="1024x1024" href={asset('/favicon/favicon-1024x1024.png')} />
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
