"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <section
      className="gradient-dark-blue h-screen mb-[2rem] "
      style={{ clipPath: "polygon(100% 0%, 100% 90%, 33% 100%, 0 94%, 0 0)" }}
    >
      <div className="flex flex-col justify-around items-center lg:flex-row">
        <div className="max-w-[30rem]">
          <p className="text-[4rem] text-white font-bold mt-[2rem]">
            Transform your business{" "}
            <strong className="brush-stroke font-extrabold">today</strong>
          </p>
          <p className="mt-[1rem] text-white text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ipsum, eligendi repudiandae accusantium vero accusamus assumenda,
            cumque incidunt ipsam cum rerum quibusdam? Animi eum suscipit eos
            molestiae earum, quis voluptatibus?
          </p>
          <button
            className="hidden lg:block text-xl mt-[3rem] bg-[#085078] hover:bg-[#4aa59a] text-white font-bold py-2
          px-4 border border-[#85d8ce] rounded"
          >
            Contáctenos
          </button>
        </div>

        <div className="mt-[4rem]">
          <Image
            src="/srl-picture.svg"
            width={500}
            height={600}
            alt="intro image"
          />
        </div>
      </div>
    </section>
  );
}
