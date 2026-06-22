<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<style>
	nav {
		font-size: 1.4rem;
	}

	nav a {
		margin-right: 1.5rem;
	}
</style>

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
        <!-- TODO: Get a nice header. Add to nix chain? -->
</footer>
