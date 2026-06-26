import { getCollection } from "astro:content";

export const SITE_TITLE = "thought for food.";
export const SITE_DESCRIPTION = "a blog about anything i want";

export async function getPublishedBlogPosts() {
  return (
    await getCollection(
      "blog",
      ({ data }) => data.published || import.meta.env.DEV,
    )
  ).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}
