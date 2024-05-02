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
  return (
    <section className="h-screen border-y-[#085078]">
      <div>
        <p className="border-l-2  border-t-2 rounded-md p-2 border-[#085078] max-w-[15rem] ml-[8rem] text-xl text-white font-bold">
          Las respuestas a sus necesidades en software
        </p>
        <p className="ml-[8rem] mb-[3rem] text-[3rem] font-bold">
          Ofrecemos diversos{" "}
          <strong className="brush-stroke font-extrabold">servicios</strong>
        </p>

        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="flex justify-center w-full relative "
          >
            <CarouselPrevious className="absolute left-4 z-10" />
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex justify-center items-center"
                >
                  <div>
                    <Card className="border-none w-[18rem] h-auto -mx-[2rem] bg-[#27607e] ">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
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
