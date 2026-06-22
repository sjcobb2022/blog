import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { getCategories, getPostsByCategory } from '$lib/posts';

export const entries: EntryGenerator = () => getCategories().map((category) => ({ category }));

export const load: PageLoad = ({ params }) => {
	const posts = getPostsByCategory(params.category);
	if (posts.length === 0) error(404, { message: 'Category not found' });
	return { category: params.category, posts };
};
