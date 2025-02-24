import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(to right, #85d8ce, #085078)" }}
    >
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
  );
}
