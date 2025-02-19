import Image from "next/image";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <Image
            src="/getintouch.svg"
            width={500}
            height={500}
            alt="Contáctenos"
            className="w-full h-auto max-w-lg mx-auto"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <h2 className="font-montserrat text-6xl  text-[#000000] font-bold mb-8 text-center lg:text-left">
            Póngase en contacto
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xl font-medium text-black">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#085078] focus:ring-2 focus:ring-[#085078]/20 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xl font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#085078] focus:ring-2 focus:ring-[#085078]/20 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xl font-medium text-black">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#085078] focus:ring-2 focus:ring-[#085078]/20 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-xl w-full bg-[#085078] text-white hover:bg-[#4aa59a] transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}