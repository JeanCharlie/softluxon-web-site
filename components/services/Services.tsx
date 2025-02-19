"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Services() {
  const services = [
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

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12 md:mb-16">
          <p className="inline-block text-lg text-[#085078] font-semibold px-4 py-2 border-l-2 border-t-2 rounded-tl-lg border-[#085078]">
            Las respuestas a sus necesidades en software
          </p>

          <h2 className="font-montserrat text-5xl font-bold text-gray-900">
            Ofrecemos diversos{" "}
            <span className="relative inline-block">
              <span className="relative z-10">servicios</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#85d8ce] opacity-30 transform -rotate-2"></span>
            </span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className=" flex justify-center  w-full   relative "
        >
          <CarouselPrevious className="absolute left-0 z-10" />
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="w-[20rem] border-none bg-gradient-to-br from-[#085078] to-[#4aa59a] text-white transform transition-transform hover:scale-105">
                  <CardContent className="flex flex-col items-center justify-center p-8 space-y-4 min-h-[300px]">
                    <span className="text-4xl mb-4">{service.icon}</span>
                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                    <p className="text-xl text-center text-white/90">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-0 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
