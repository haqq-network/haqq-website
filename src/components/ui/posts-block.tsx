'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import blogPlaceholderImage1 from '@/assets/images/blog-post-placeholder-1.png';
import blogPlaceholderImage2 from '@/assets/images/blog-post-placeholder-2.png';
import blogPlaceholderImage3 from '@/assets/images/blog-post-placeholder-3.png';
import { Post } from '@/types';
import { BlogPostCard } from './blog-post-card';
import { BlogTabs } from './blog-tabs';
import { Heading } from './heading';

export function PostsBlock({
  posts,
  tags,
  currentTag,
}: {
  posts: Post[];
  tags: string[];
  currentTag?: string | null;
}) {
  const [tab, setTab] = useState<string>(currentTag ?? 'all posts');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tagFromParams = searchParams.get('tag');

    if (tagFromParams) {
      setTab(tagFromParams.toLowerCase());
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    if (tab === 'all posts') {
      return posts;
    }

    return posts.filter((post) => {
      return post.tags
        .map((postTag) => {
          return postTag.toLowerCase();
        })
        .includes(tab);
    });
  }, [posts, tab]);

  const getPostImage = useCallback((post: Post) => {
    if (post.image) {
      return post.image;
    }

    const imagesArray = [
      blogPlaceholderImage1 as StaticImageData,
      blogPlaceholderImage2 as StaticImageData,
      blogPlaceholderImage3 as StaticImageData,
    ];
    const index = new Date(post.date).getTime() % imagesArray.length;
    return imagesArray[index];
  }, []);

  return (
    <section className="flex flex-col py-[60px]">
      <div className="overflow-clip px-[16px] sm:px-[63px] lg:px-[79px]">
        <div className="mb-[28px] flex flex-row items-center gap-x-[38px] md:mb-[42px] md:gap-x-[48px] lg:mb-[56px]">
          <Heading>Recent posts</Heading>
          <div className="relative flex items-center">
            <div className="h-[16px] w-[16px] bg-white" />
            <div className="absolute h-[1px] w-[3000px] bg-haqq-border" />
          </div>
        </div>

        <BlogTabs
          tabs={['all posts', ...tags]}
          current={tab}
          onChange={(tag) => {
            router.replace(`/blog?tag=${tag.toLowerCase()}`);
          }}
        />

        <div className="mt-[28px] grid grid-cols-1 gap-[28px] md:mt-[36px] md:grid-cols-2 md:gap-[38px] xl:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <BlogPostCard
                    date={new Date(post.date)}
                    description={post.description ?? ''}
                    image={getPostImage(post)}
                    title={post.title}
                    tags={post.tags}
                  />
                </Link>
              );
            })
          ) : (
            <div className="col-span-1 w-full py-12 text-center text-lg md:col-span-2 xl:col-span-3">
              No posts found
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
