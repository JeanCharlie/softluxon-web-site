"use client"
import React from "react";
import { clients } from "@/app/utils/constants/consts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function Testimonials() {
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
    <section className="border-y-[#085078]">
      <Container className="pb-16 md:pb-24">
        <p className="border-l-2 border-t-2 rounded-md p-2 border-[#085078] max-w-[15rem] text-xl text-white font-bold">
          Las opiniones de nuestros clientes son muy importantes para nosotros
        </p>
        <p className="mb-[3rem] text-[3rem] font-bold">
          Ellos han dicho...{" "}
        </p>

        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem
                  key={client.id}
                  className="md:basis-1/2 lg:basis-1/3 flex justify-center items-center"
                >
                  <div>
                    <Card className="border-none w-[18rem] h-auto -mx-[2rem] bg-[#27607e]">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-white">
                        <div className="mb-4">
                          <Image
                            src={client.avatar}
                            alt={client.name}
                            width={96}
                            height={96}
                            className="rounded-full"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-2">
                          {client.name}
                        </h3>
                        <p className="text-sm text-gray-300 text-center mb-2">
                          {client.position}
                        </p>
                        <p className="text-center">{client.opinion}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-[#27607e] w-6"
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