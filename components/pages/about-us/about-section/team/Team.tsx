"use client"
import { teamMembers } from "@/consts/team-member";
import { TeamCard } from "./team-card/TeamCard";

export const Team = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center text-[#085078] mb-12">
        Nuestro Equipo
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </>
  );
};
