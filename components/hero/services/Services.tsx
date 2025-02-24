"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { servicesHero as services  } from "@/consts/services";

export default function Services() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  

  return (
    <section>
      <Container className="pb-16 md:pb-24">
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

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Link href="/services">
                    <Card className="border-none bg-gradient-to-br from-[#085078] to-[#4aa59a] text-white transform transition-transform hover:scale-105">
                      <CardContent className="flex flex-col items-center justify-center p-8 space-y-4 min-h-[300px]">
                        <span className="text-4xl mb-4">{service.icon}</span>
                        <h3 className="text-3xl font-semibold">
                          {service.title}
                        </h3>
                        <p className="text-xl text-center text-white/90">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-[#085078] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
