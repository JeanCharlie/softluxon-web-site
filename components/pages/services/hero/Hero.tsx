import { Container } from "@/components/ui/Container";

export default function ServicesHero() {
  return (
    <section
      className="relative pt-32 pb-20"
      style={{ background: "linear-gradient(to right, #85d8ce, #085078)" }}
    >
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
  );
}
