import type { PageLoad } from './$types';
import { getPosts } from '$lib/posts';

export const load: PageLoad = async () => {
	return { posts: getPosts() };
};
