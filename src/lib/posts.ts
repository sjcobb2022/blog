export interface Post {
	slug: string;
	title: string;
	date: string;
	categories: string[];
	published: boolean;
}

interface MarkdownModule {
	metadata: Omit<Post, 'slug'>;
	default: unknown;
}

const modules = import.meta.glob<MarkdownModule>('/src/posts/*.md');
const eagerModules = import.meta.glob<MarkdownModule>('/src/posts/*.md', { eager: true });

const toSlug = (path: string) => path.split('/').at(-1)!.replace('.md', '');

export function getPosts(): Post[] {
	return Object.entries(eagerModules)
		.map(([path, { metadata }]) => ({ ...metadata, slug: toSlug(path) } satisfies Post))
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCategories(): string[] {
	return [...new Set(getPosts().flatMap((p) => p.categories))].sort();
}

export function getPostsByCategory(category: string): Post[] {
	return getPosts().filter((p) => p.categories.includes(category));
}

export function getPostSlugs(): { slug: string }[] {
	return Object.keys(modules).map((path) => ({ slug: toSlug(path) }));
}

export async function getPost(slug: string) {
	const { metadata, default: content } = await modules[`/src/posts/${slug}.md`]();
	return { ...metadata, slug, content };
}
