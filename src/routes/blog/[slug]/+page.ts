import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { getPost, getPostSlugs } from '$lib/posts';

export const entries: EntryGenerator = () => getPostSlugs();

export const load: PageLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	if (!post) error(404, { message: 'Not found' });
	return post;
};
