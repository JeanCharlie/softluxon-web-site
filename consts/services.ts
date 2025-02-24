import { Service } from "@/interfaces/interfaces";

export const services: Service[] = [
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

  export const servicesHero = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos",
      icon: "🌐",
    },
    {
      title: "Apps Móviles",
      description: "Desarrollo de aplicaciones iOS y Android",
      icon: "📱",
    },
    {
      title: "Consultoría IT",
      description: "Asesoramiento tecnológico especializado",
      icon: "💡",
    },
    {
      title: "Cloud Solutions",
      description: "Servicios en la nube escalables",
      icon: "☁️",
    },
    {
      title: "Seguridad",
      description: "Protección de datos y sistemas",
      icon: "🔒",
    },
  ];