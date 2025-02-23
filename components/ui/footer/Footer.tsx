import { services } from "@/app/utils/constants/consts";
import { Container } from "../Container";

export default function Footer() {
  return (
    <footer className="gradient-dark-blue">
      <Container>
        <div className="grid grid-cols-2 gap-20 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <div>
              <h2 className="text-white border-b-[0.1rem] mb-6 border-gray-500 text-xl font-semibold uppercase dark:text-white">
                Softluxon
              </h2>
              <p className="max-w-[15rem] text-gray-300 mb-6">
                Empresa de desarrollo de software en Cuba. Ofrecemos soluciones
                personalizadas para satisfacer las necesidades de nuestros
                clientes. Desde aplicaciones móviles hasta sistemas
                empresariales.
              </p>
            </div>

            <div className="text-gray-300">
              <h2 className=" border-b-[0.1rem]  border-gray-500 mb-6 text-lg  font-semibold text-white uppercase">
                Contáctenos
              </h2>
              <div className="space-y-2">
                <p>3ra y 28, Miramar, Playa, La Habana</p>
                <p>softluxonempresa@gmail.com</p>
                <p>+53 #### ####</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="border-b-[0.1rem]  border-gray-500 mb-6 text-xl font-semibold text-white uppercase dark:text-white">
              Nosotros
            </h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Quiénes somos
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Qué hacemos
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Únete al equipo
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Actualidad de SoftLuxon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" border-b-[0.1rem]  border-gray-500 mb-6 text-xl  font-semibold text-white uppercase dark:text-white">
              Servicios
            </h2>
            <ul className="text-gray-300 font-medium">
              {services.map((service) => (
                <li key={service.title} className="mb-4">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 bg-[#085078] flex items-center justify-center">
          <span className="text-sm text-white  sm:text-center">
            © {new Date().getFullYear()} <a href="#"> SoftLuxon</a>. Todos los derechos reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}
