import Image from "next/image";


export default function AboutUs() {
  return (
    <section
      className="py-[6rem]  flex flex-col lg:flex-row mt-[4rem] mb-[4rem] justify-center items-center gap-[5rem]">
      <div>
        <Image src={"/about.svg"} alt="About us" width={400} height={500} className="imagen"/>
      </div>

      <div className="flex flex-col">
        <div className="text-xl max-w-[40rem] ">
          <span className="text-[3rem] font-bold">Sobre nosotros</span>
          <p className="mt-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ullam itaque perferendis rem deleniti ab voluptatem nam assumenda
            dolores, aliquid fuga ipsum dolore vel ratione! Ad dolorum
            repellendus autem. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda sequi delectus officiis nesciunt
            quisquam. Eius quod velit harum ullam porro! Quis fugiat ratione
            repellat consequuntur repellendus nostrum, magnam nihil doloribus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ullam itaque perferendis rem deleniti ab voluptatem nam assumenda
            dolores, aliquid fuga ipsum dolore vel ratione! Ad dolorum
            repellendus autem. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda sequi delectus officiis nesciunt
            quisquam. Eius quod velit harum ullam porro! Quis fugiat ratione
            repellat consequuntur repellendus nostrum, magnam nihil doloribus.
          </p>
        </div>

        <div>
          <button
            className="lg:mt-[2rem] mt-[1rem]  hover:bg-[#4aa59a] font-bold py-2
          px-4 border-2 border-[#085078] rounded uppercase"
          >
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
}
