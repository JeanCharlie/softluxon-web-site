"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <section
      className="bg-gradient-to-br from-[#085078] to-[#4aa59a] min-h-full relative pb-16 md:pb-24 pt-16 md:pt-20"
      style={{
        clipPath: "polygon(100% 0%, 100% 92%, 50% 100%, 0 95%, 0 0)",
      }}
    >
      <div className="max-w-7xl  mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Contenido textual */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="font-montserrat text-6xl text-white font-bold leading-tight">
              Transform your business{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-extrabold">today</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#85d8ce] opacity-30 transform -rotate-2"></span>
              </span>
            </h1>
            
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-2xl">
              Potenciamos tu presencia digital con soluciones innovadoras y 
              personalizadas. Transformamos tu visión en resultados tangibles, 
              impulsando el crecimiento de tu negocio en la era digital.
            </p>
            
           

            <button className="text-xl mt-8 bg-[#085078] text-white hover:bg-[#4aa59a] transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Contáctenos
          </button>
          </div>

          {/* Imagen */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/srl-picture.svg"
                width={500}
                height={600}
                alt="Transformación empresarial digital"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
