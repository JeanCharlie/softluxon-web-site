import React from "react";
import { clients } from "@/app/utils/constants/consts";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="h-screen border-y-[#085078] ">
      <div>
        <p className="border-l-2 border-t-2 rounded-md p-2 border-[#085078] max-w-[15rem] ml-[8rem] text-xl text-white font-bold">
          Las opiniones de nuestros clientes son muy importantes para nosotros
        </p>
        <p className="ml-[8rem] mb-[3rem] text-[3rem] font-bold">
          Ellos han dicho...{" "}
        </p>

        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="flex justify-center w-full relative"
          >
            <CarouselPrevious className="absolute left-4 z-10" />
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem
                  key={client.id}
                  className="md:basis-1/2 lg:basis-1/3 flex justify-center items-center"
                >
                  <div>
                    <Card className="border-none w-[18rem] h-auto -mx-[2rem] bg-[#27607e]">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-white ">
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
            <CarouselNext className="absolute right-4 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
