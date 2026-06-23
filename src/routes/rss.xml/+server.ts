import { getPosts } from '$lib/posts';
import * as config from '$lib/config';

export const prerender = true;

// based on: https://joyofcode.xyz/sveltekit-markdown-blog
export function GET() {
	const posts = getPosts();

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
	<channel>
		<title>${config.title}</title>
		<description>${config.description}</description>
		<link>${config.url}</link>
		<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
		${posts
			.map(
				(post) => `
		<item>
			<title>${post.title}</title>
			<link>${config.url}/blog/${post.slug}</link>
			<guid>${config.url}/blog/${post.slug}</guid>
			${post.date ? `<pubDate>${new Date(post.date).toUTCString()}</pubDate>` : ''}
		</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
