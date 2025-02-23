"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "cloud-migration",
    title: "Guía Completa para la Migración a la Nube",
    excerpt: "Descubre las mejores prácticas y estrategias para una migración exitosa a la nube...",
    category: "Cloud Computing",
    author: { name: "Carlos Ruiz", image: "/team/carlos-avatar.svg" },
    date: "22 Feb 2024",
    readTime: "8 min",
    image: "/blog/cloud-migration.svg",
  },
  {
    id: "cybersecurity-2024",
    title: "Tendencias en Ciberseguridad para 2024",
    excerpt: "Análisis de las principales amenazas y soluciones de seguridad emergentes...",
    category: "Seguridad",
    author: { name: "Ana Martínez", image: "/team/ana-avatar.svg" },
    date: "20 Feb 2024",
    readTime: "6 min",
    image: "/blog/cybersecurity.svg",
  },
  {
    id: "ai-business",
    title: "IA en los Negocios: Más Allá del Hype",
    excerpt: "Casos prácticos de implementación de IA en empresas y sus resultados...",
    category: "Inteligencia Artificial",
    author: { name: "Laura Sánchez", image: "/team/laura-avatar.svg" },
    date: "18 Feb 2024",
    readTime: "10 min",
    image: "/blog/ai-business.svg",
  },
  {
    id: "web-dev-trends",
    title: "Tendencias en Desarrollo Web para 2024",
    excerpt: "Exploramos las tecnologías emergentes en el desarrollo web y su impacto...",
    category: "Desarrollo Web",
    author: { name: "Carlos Ruiz", image: "/team/carlos-avatar.svg" },
    date: "15 Feb 2024",
    readTime: "7 min",
    image: "/blog/web-dev-trends.svg",
  },
  {
    id: "digital-transformation",
    title: "Claves para la Transformación Digital Empresarial",
    excerpt: "Cómo las empresas pueden adaptarse y prosperar en la era digital...",
    category: "Transformación Digital",
    author: { name: "Ana Martínez", image: "/team/ana-avatar.svg" },
    date: "10 Feb 2024",
    readTime: "9 min",
    image: "/blog/digital-transformation.svg",
  },
];

const categories = [
  "Todos",
  "Cloud Computing",
  "Seguridad",
  "Desarrollo Web",
  "Inteligencia Artificial",
  "Transformación Digital",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <section className="relative pt-32 pb-20" style={{ background: "linear-gradient(to right, #85d8ce, #085078)" }}>
        <Container>
          <div className="text-center text-white space-y-6">
            <h1 className="font-montserrat text-5xl md:text-6xl font-bold drop-shadow-sm">Blog</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium">
              Insights y novedades sobre tecnología, innovación y transformación digital
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 bg-gray-50">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-lg transition-all ${
                  selectedCategory === category
                    ? "bg-[#085078] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
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
                    <span className="text-sm font-medium text-[#085078]">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#085078] mb-4 line-clamp-2">{post.title}</h2>
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
                        <p className="text-sm font-medium text-[#085078]">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}