"use client";

import { BlogPostCard } from "../post-card/BlogPostCard";

interface BlogPostListProps {
  posts: {
    id: string;
    image: string;
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
  }[];
}

export const BlogPostList = ({ posts }: BlogPostListProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
