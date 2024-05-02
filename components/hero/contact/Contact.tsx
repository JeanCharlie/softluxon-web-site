import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <section className="my-10">
      <div className="flex md:justify-around md:items-center justify-center">
        <div>
          <Image
            src="/getintouch.svg"
            width={400}
            height={500}
            alt="intro image"
            className="hidden md:block"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Póngase en contacto con nosotros
          </h2>
          <form>
            <div className="flex gap-6">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500 mb-2"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500 mb-2"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            
          </form>
          <button
              className="mt-[2rem]  hover:bg-[#4aa59a] font-bold py-2
          px-4 border-2 border-[#085078] rounded uppercase"
            >
              Enviar mensaje
            </button>
        </div>
      </div>
    </section>
  );
}
