import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service } from "@/interfaces/interfaces";

interface ServiceCardProps {
  service: Service;
  reverse?: boolean;
}

export default function ServiceCard({ service, reverse }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 items-center bg-white rounded-2xl p-8 shadow-lg`}
    >
      {/* Contenido */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="space-y-4">
          <span className="text-4xl">{service.icon}</span>
          <h2 className="font-montserrat text-4xl font-bold text-[#085078]">
            {service.title}
          </h2>
          <p className="text-xl text-gray-700">{service.description}</p>
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
                <p className="text-gray-700 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-md"
          style={{ background: "linear-gradient(to right, #085078, #85d8ce)" }}
        >
          Solicitar información
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Imagen */}
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
  );
}
