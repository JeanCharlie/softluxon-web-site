"use client";
import React, { useState } from "react";
import { services } from "@/app/utils/constants/consts";
import DropdownMenu from "./DropdownMenu";

export default function TopBar() {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="flex justify-around items-center border-b-[0.1rem] text-white p-4 gradient-dark-blue">
      <div>
        <span className="text-lg font-bold uppercase">Alsoftpro</span>
      </div>
      <div className="hidden md:flex items-center space-x-4 relative text-xl ">
        <span className="cursor-pointer" onClick={toggleServices}>
          Servicios
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 inline-block transform ${
              showServices ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {showServices && <DropdownMenu services={services} />}
        </span>
        <span>Sobre nosotros</span>
        <span>Únete al equipo</span>
      </div>

      <div>
        <button
          className=" bg-[#085078] hover:bg-[#4aa59a] text-white  text-xl p-2
           border border-[#85d8ce] rounded"
        >
          Contáctenos
        </button>
      </div>
    </div>
  );
}
