import React from "react";

interface DropdownMenuProps {
  services: { title: string; description: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ services }) => {
  return (
    <ul className="flex flex-col  absolute top-10 -left-10 bg-white text-black p-2 rounded-md shadow-md z-10">
      {services.map((service, index) => (
        <li key={index} className="mb-2 ">
          <p className="font-bold">{service.title}</p>
          <p>{service.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
