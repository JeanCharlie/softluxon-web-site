"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { blogPosts, categories } from "@/consts/blog";
import { Hero } from "./blog-section/hero/Hero";
import { CategoryFilter } from "./blog-section/categories/CategoryFilter";
import { BlogPostList } from "./blog-section/post-list/BlogPostList";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Sección Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(to right, #85d8ce, #085078)" }}
      >
        <Container>
          <Hero />
        </Container>
      </section>

      {/* Filtro de Categorías */}
      <section className="py-8 bg-gray-50">
        <Container>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Container>
      </section>

      {/* Listado de Posts */}
      <section className="py-16 bg-gray-50">
        <Container>
          <BlogPostList posts={filteredPosts} />
        </Container>
      </section>
    </>
  );
}
