import rss from "@astrojs/rss";
import { getPublishedBlogPosts, SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context: { site: URL }) {
  const posts = await getPublishedBlogPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
