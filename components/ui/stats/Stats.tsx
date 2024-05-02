"use client";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="flex sm:flex-row gap-6 sm:gap-9 text-gray-300 flex-col">
      <div>
        <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
          <CountUp start={0} end={100} duration={2} separator="," />
          <span className="font-bold text-[3rem]">+</span>
        </h3>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Profesionales
        </p>
      </div>
      <div>
        <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
          <CountUp start={0} end={50} duration={2} separator="," />
          <span className="font-bold text-[3rem]">+</span>
        </h3>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Proyectos
        </p>
      </div>
      <div>
        <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
          <CountUp start={0} end={20} duration={2} separator="," />
          <span className="font-bold text-[3rem]">+</span>
        </h3>
        <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
          Servicios
        </p>
      </div>
    </div>
  );
}
