import { BlogPost } from "@/interfaces/interfaces";

export const blogPosts: BlogPost[] = [
  {
    id: "cloud-migration",
    title: "Guía Completa para la Migración a la Nube",
    excerpt:
      "Descubre las mejores prácticas y estrategias para una migración exitosa a la nube...",
    category: "Cloud Computing",
    author: { name: "Carlos Ruiz", image: "/team/carlos-avatar.svg" },
    date: "22 Feb 2024",
    readTime: "8 min",
    image: "/blog/cloud-migration.svg",
  },
  {
    id: "cybersecurity-2024",
    title: "Tendencias en Ciberseguridad para 2024",
    excerpt:
      "Análisis de las principales amenazas y soluciones de seguridad emergentes...",
    category: "Seguridad",
    author: { name: "Ana Martínez", image: "/team/ana-avatar.svg" },
    date: "20 Feb 2024",
    readTime: "6 min",
    image: "/blog/cybersecurity.svg",
  },
  {
    id: "ai-business",
    title: "IA en los Negocios: Más Allá del Hype",
    excerpt:
      "Casos prácticos de implementación de IA en empresas y sus resultados...",
    category: "Inteligencia Artificial",
    author: { name: "Laura Sánchez", image: "/team/laura-avatar.svg" },
    date: "18 Feb 2024",
    readTime: "10 min",
    image: "/blog/ai-business.svg",
  },
  {
    id: "web-dev-trends",
    title: "Tendencias en Desarrollo Web para 2024",
    excerpt:
      "Exploramos las tecnologías emergentes en el desarrollo web y su impacto...",
    category: "Desarrollo Web",
    author: { name: "Carlos Ruiz", image: "/team/carlos-avatar.svg" },
    date: "15 Feb 2024",
    readTime: "7 min",
    image: "/blog/web-dev-trends.svg",
  },
  {
    id: "digital-transformation",
    title: "Claves para la Transformación Digital Empresarial",
    excerpt:
      "Cómo las empresas pueden adaptarse y prosperar en la era digital...",
    category: "Transformación Digital",
    author: { name: "Ana Martínez", image: "/team/ana-avatar.svg" },
    date: "10 Feb 2024",
    readTime: "9 min",
    image: "/blog/digital-transformation.svg",
  },
];

export const categories = [
  "Todos",
  "Cloud Computing",
  "Seguridad",
  "Desarrollo Web",
  "Inteligencia Artificial",
  "Transformación Digital",
];
