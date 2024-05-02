"use client";
import Stats from "@/components/ui/stats/Stats";
import Image from "next/image";

export default function Workflow() {
  return (
    <div
      className="h-screen flex flex-col lg:flex-row justify-center items-center gap-[5rem]
      gradient-dark-blue"
      style={{
        clipPath: "polygon(25% 0%, 100% 9%, 100% 90%, 75% 100%, 0 93%, 0 8%)",
      }}
    >
      <div className="max-w-[40rem]">
        <p className="text-[3rem] text-white font-semibold">
          Elevando su productividad con soluciones versátiles
        </p>
        <p className="text-white text-xl mt-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam
          itaque perferendis rem deleniti ab voluptatem nam assumenda dolores,
          aliquid fuga ipsum dolore vel ratione! Ad dolorum repellendus autem.
        </p>

        <button
          className="my-[2rem] bg-[#085078] hover:bg-[#4aa59a] text-white font-bold py-2
          px-4 border border-[#85d8ce] rounded uppercase"
        >
          Ver más
        </button>

        <Stats />
      </div>

      <div>
        <Image
          src={"/stats.svg"}
          alt="About us"
          width={400}
          height={500}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}
