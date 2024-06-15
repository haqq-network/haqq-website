import { cache } from 'react';
import { FALCONER_ENDPOINT, REVALIDATE_TIME } from '@/constants';
import { BlogPost, NextRequestInit } from '@/types';

export const revalidate = REVALIDATE_TIME;

export async function getHaqqBlogPostsData(options: Partial<NextRequestInit>) {
  const requestUrl = new URL('/haqq/blog_posts', FALCONER_ENDPOINT);
  const response = await fetch(requestUrl, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) {
    throw new Error('Blog posts fetch failed');
  }

  const responseJson: { posts: BlogPost[] } = await response.json();

  return responseJson.posts;
}

export const getHaqqBlogPostsFromFalconer = cache(async () => {
  try {
    const posts = await getHaqqBlogPostsData({
      next: {
        revalidate,
      },
    });

    const tags = [];
    const sortedPosts = posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    for (const post of sortedPosts) {
      tags.push(
        ...post.tags.map((tag) => {
          return tag.toLowerCase();
        }),
      );
    }

    return { posts, tags: [...new Set(tags)] };
  } catch (error) {
    console.error(error);
  }

  return { posts: [], tags: [] };
});

export const getBlogPost = cache(async (slug: string) => {
  const posts = await getHaqqBlogPostsData({
    next: {
      revalidate,
    },
  });

  return posts.find((post) => {
    return post.slug === slug;
  });
});
