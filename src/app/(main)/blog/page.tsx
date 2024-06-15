import type { Metadata } from 'next';
import { BlogPage } from '@/components/pages/blog-page';
import { DEPLOY_URL, REVALIDATE_TIME } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';
import { getHaqqBlogPostsFromFalconer } from '@/utils/get-blog-posts';

export const dynamicParams = true;
export const revalidate = REVALIDATE_TIME;

const title = 'Blog';
const description =
  "Stay updated with the latest news, insights, and trends in the world of ethical and Islamic Finance technology with HAQQ's blog.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL('/blog', DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: { tag?: string | null };
}) {
  const { posts, tags } = await getHaqqBlogPostsFromFalconer();
  const initialTag = searchParams.tag ? String(searchParams.tag) : null;

  let featuredPost;
  const postsToRender = [];

  for (const post of posts) {
    if (!featuredPost && post.isFeatured) {
      featuredPost = post;
    } else {
      postsToRender.push(post);
    }
  }

  return (
    <BlogPage
      featuredPost={featuredPost}
      posts={postsToRender}
      tags={tags}
      currentTag={initialTag}
    />
  );
}
