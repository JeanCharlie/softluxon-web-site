"use client";
import { Container } from "@/components/ui/Container";
import Stats from "@/components/ui/stats/Stats";
import Image from "next/image";

export default function Workflow() {
  return (
    <section className="relative pb-16 md:pb-24 bg-gradient-to-br from-[#085078] to-[#4aa59a]">
      
      <div className="absolute inset-0" style={{
        clipPath: "polygon(25% 0%, 100% 5%, 100% 95%, 75% 100%, 0 97%, 0 3%)",
        background: 'linear-gradient(135deg, rgba(8,80,120,0.95) 0%, rgba(74,165,154,0.95) 100%)'
      }}></div>
      <Container className="relative z-10">
      {/* <div className="container mx-auto px-4 relative z-10"> */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="font-montserrat text-5xl text-white font-bold leading-tight">
              Elevando su productividad con soluciones versátiles
            </h2>
            
            <p className="text-white/90 text-2xl  leading-relaxed">
              Optimizamos sus procesos empresariales mediante soluciones 
              tecnológicas adaptadas a sus necesidades específicas, 
              garantizando eficiencia y escalabilidad.
            </p>
            <button className="text-2xl mt-8 bg-white  text-[#085078] hover:bg-[#4aa59a] transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Ver más
          </button>

            <div className="mt-12">
              <Stats />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/stats.svg"
              alt="Estadísticas y métricas"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
              priority
            />
          </div>
        </div>
      {/* </div> */}
      </Container>
    </section>
  );
}