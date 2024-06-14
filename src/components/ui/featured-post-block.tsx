import { useMemo } from 'react';
import { type StaticImageData } from 'next/image';
import Link from 'next/link';
import blogPlaceholderImage1 from '@/assets/images/blog-post-placeholder-1.png';
import blogPlaceholderImage2 from '@/assets/images/blog-post-placeholder-2.png';
import blogPlaceholderImage3 from '@/assets/images/blog-post-placeholder-3.png';
import { Heading } from './heading';
import { BlogPostCard } from './blog-post-card';
import { Post } from '@/types';

export function FeaturedPostBlock({ post }: { post: Post }) {
  const postImage = useMemo(() => {
    if (post.image) {
      return post.image;
    }

    const imagesArray = [
      blogPlaceholderImage1 as unknown,
      blogPlaceholderImage2 as unknown,
      blogPlaceholderImage3 as unknown,
    ] as StaticImageData[];
    const index = new Date(post.date).getTime() % 3;
    const placeholderImage = imagesArray[index];

    return placeholderImage;
  }, [post.date, post.image]);

  return (
    <section className="flex flex-col py-[60px]">
      <div className="overflow-clip px-[16px] sm:px-[63px] lg:px-[79px]">
        <div className="mb-[28px] flex flex-row items-center gap-x-[38px] md:mb-[42px] md:gap-x-[48px] lg:mb-[56px]">
          <Heading>Featured post</Heading>
          <div className="relative flex items-center">
            <div className="h-[16px] w-[16px] bg-white" />
            <div className="absolute h-[1px] w-[3000px] bg-haqq-border" />
          </div>
        </div>

        <div>
          <Link href={`/blog/${post.slug}`}>
            <BlogPostCard
              date={new Date(post.date)}
              description={post.description ?? ''}
              image={postImage}
              title={post.title}
              tags={post.tags}
              isFeatured
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
