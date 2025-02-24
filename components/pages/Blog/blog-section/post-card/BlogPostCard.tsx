"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface BlogPostCardProps {
  post: {
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
  };
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-[#085078]">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        <h2 className="text-xl font-bold text-[#085078] mb-4 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-[#085078]">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
