"use client";
import Image from "next/image";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export const TeamCard = ({ image, name, role, bio }: TeamCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Image src={image} alt={name} fill className="object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold text-[#085078]">{name}</h3>
      <p className="text-[#85d8ce] font-medium mb-2">{role}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};
