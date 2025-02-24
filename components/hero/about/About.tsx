import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section>
      <Container className="pb-16 md:pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/about.svg"
              alt="Sobre nuestra empresa"
              width={500}
              height={500}
              className="w-full h-auto max-w-lg mx-auto"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-montserrat text-6xl text-[#000000] font-bold">
              Sobre nosotros
            </h2>

            <div className="space-y-4 text-[#000000]">
              <p className="text-lg md:text-xl  leading-relaxed">
                Potenciamos empresas a través de soluciones tecnológicas
                innovadoras. Nuestra experiencia nos permite entender las
                necesidades únicas de cada cliente y transformarlas en
                soluciones efectivas.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                Con años de experiencia en el sector, hemos ayudado a numerosas
                empresas a alcanzar sus objetivos digitales, siempre manteniendo
                los más altos estándares de calidad y profesionalismo.
              </p>
            </div>

            <button className="text-xl mt-8 bg-[#085078] text-white hover:bg-[#4aa59a] transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <Link href="/about-us">Ver más</Link>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
