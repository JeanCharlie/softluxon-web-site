"use client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <>
      <div className="text-center text-white space-y-8">
        <h2 className="text-4xl font-bold">Únete a Nuestra Historia</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-[#085078] rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Contáctenos
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
};
