"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceFeature {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  image: string;
}

const services: Service[] = [
  {
    id: "web-dev",
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para brindar la mejor experiencia a tus usuarios.",
    icon: "🌐",
    features: [
      {
        title: "Sitios Web Corporativos",
        description: "Diseños profesionales que reflejan la identidad de tu marca"
      },
      {
        title: "E-commerce",
        description: "Tiendas online seguras y fáciles de gestionar"
      },
      {
        title: "Aplicaciones Web",
        description: "Soluciones web personalizadas para tu negocio"
      }
    ],
    image: "/services/web-development.svg"
  },
  {
    id: "mobile-dev",
    title: "Apps Móviles",
    description: "Desarrollamos aplicaciones nativas y multiplataforma que conectan con tus usuarios donde estén.",
    icon: "📱",
    features: [
      {
        title: "Apps iOS y Android",
        description: "Desarrollo nativo para máximo rendimiento"
      },
      {
        title: "Apps Multiplataforma",
        description: "Soluciones eficientes con React Native y Flutter"
      },
      {
        title: "UX/UI Móvil",
        description: "Interfaces intuitivas y atractivas"
      }
    ],
    image: "/services/mobile-development.svg"
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Implementamos soluciones en la nube que garantizan escalabilidad, rendimiento y disponibilidad para tu negocio.",
    icon: "☁️",
    features: [
      {
        title: "Migración a la Nube",
        description: "Transición segura y eficiente a infraestructuras cloud"
      },
      {
        title: "Arquitectura Cloud",
        description: "Diseño de sistemas distribuidos y microservicios"
      },
      {
        title: "DevOps",
        description: "Automatización y optimización de procesos de desarrollo"
      }
    ],
    image: "/services/cloud-solutions.svg"
  },
  {
    id: "consulting",
    title: "Consultoría IT",
    description: "Asesoramiento experto para optimizar tus procesos tecnológicos y maximizar el retorno de tu inversión.",
    icon: "💡",
    features: [
      {
        title: "Transformación Digital",
        description: "Estrategias personalizadas para modernizar tu negocio"
      },
      {
        title: "Optimización de Procesos",
        description: "Mejora de eficiencia operativa y reducción de costos"
      },
      {
        title: "Planificación Estratégica",
        description: "Roadmap tecnológico alineado con tus objetivos de negocio"
      }
    ],
    image: "/services/consulting.svg"
  },
  {
    id: "security",
    title: "Seguridad",
    description: "Protegemos tu negocio con soluciones de seguridad robustas y actualizadas contra las últimas amenazas digitales.",
    icon: "🔒",
    features: [
      {
        title: "Auditoría de Seguridad",
        description: "Evaluación completa de vulnerabilidades y riesgos"
      },
      {
        title: "Implementación de Protocolos",
        description: "Establecimiento de políticas y medidas de seguridad"
      },
      {
        title: "Monitoreo Continuo",
        description: "Vigilancia 24/7 y respuesta ante incidentes"
      }
    ],
    image: "/services/security.svg"
  }
];

export default function Services() {
  return (
    <>
    {/* Hero Section - Ajustado para usar los colores exactos */}
    <section className="relative pt-32 pb-20" style={{
      background: 'linear-gradient(to right, #85d8ce, #085078)'
    }}>
      <Container>
        <div className="text-center text-white space-y-6">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold drop-shadow-sm">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium">
            Soluciones tecnológicas innovadoras diseñadas para impulsar 
            el crecimiento de tu empresa en la era digital
          </p>
        </div>
      </Container>
    </section>

    {/* Services Detail Section - Mejorado contraste */}
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center bg-white rounded-2xl p-8 shadow-lg`}
            >
              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="text-4xl">{service.icon}</span>
                  <h2 className="font-montserrat text-4xl font-bold text-[#085078]">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-700">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-[#85d8ce] flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#085078]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#085078]">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-md"
                  style={{
                    background: 'linear-gradient(to right, #085078, #85d8ce)'
                  }}
                >
                  Solicitar información
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* CTA Section - Ajustado para usar los colores exactos */}
    <section className="py-16" style={{
      background: 'linear-gradient(to right, #85d8ce, #085078)'
    }}>
      <Container>
        <div className="text-center text-white space-y-8">
          <h2 className="font-montserrat text-4xl font-bold drop-shadow-sm">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-white font-medium max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a 
            alcanzar tus objetivos tecnológicos
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold bg-white text-[#085078] rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Contáctenos
          </Link>
        </div>
      </Container>
    </section>
  </>
  );
}