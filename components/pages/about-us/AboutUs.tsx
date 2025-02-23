"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ana Martínez",
    role: "CEO & Fundadora",
    image: "/team/ana-avatar.svg",
    bio: "Con más de 15 años de experiencia en tecnología y desarrollo empresarial"
  },
  {
    name: "Carlos Ruiz",
    role: "CTO",
    image: "/team/carlos-avatar.svg",
    bio: "Experto en arquitectura de sistemas y desarrollo de soluciones escalables"
  },
  {
    name: "Laura Sánchez",
    role: "Directora de Proyectos",
    image: "/team/laura-avatar.svg",
    bio: "Especialista en gestión ágil y transformación digital"
  }
];

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2015",
    title: "Fundación",
    description: "Comenzamos nuestra travesía con la visión de transformar empresas a través de la tecnología"
  },
  {
    year: "2018",
    title: "Expansión Regional",
    description: "Ampliamos nuestras operaciones a toda Latinoamérica"
  },
  {
    year: "2020",
    title: "Innovación Digital",
    description: "Lanzamiento de nuestra división de soluciones cloud y ciberseguridad"
  },
  {
    year: "2023",
    title: "Reconocimiento Internacional",
    description: "Reconocidos como líderes en transformación digital empresarial"
  }
];

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20" style={{
        background: 'linear-gradient(to right, #85d8ce, #085078)'
      }}>
        <Container>
          <div className="text-center text-white space-y-6">
            <h1 className="font-montserrat text-5xl md:text-6xl font-bold drop-shadow-sm">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium">
              Impulsando la innovación tecnológica y el crecimiento empresarial desde 2015
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#085078]">Nuestra Misión</h2>
              <p className="text-lg text-gray-700">
                Transformar el panorama empresarial a través de soluciones tecnológicas 
                innovadoras y sostenibles que impulsen el crecimiento y éxito de 
                nuestros clientes.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#085078]">Nuestra Visión</h2>
              <p className="text-lg text-gray-700">
                Ser reconocidos globalmente como líderes en la transformación digital 
                empresarial, estableciendo nuevos estándares de innovación y excelencia 
                en servicios tecnológicos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center text-[#085078] mb-12">
            Nuestra Historia
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4">
                  <div className="text-3xl font-bold text-[#85d8ce]">{milestone.year}</div>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#085078] mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-center text-[#085078] mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#085078]">{member.name}</h3>
                <p className="text-[#85d8ce] font-medium mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(to right, #85d8ce, #085078)'
      }}>
        <Container>
          <div className="text-center text-white space-y-8">
            <h2 className="text-4xl font-bold">Únete a Nuestra Historia</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-[#085078] rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contáctenos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}