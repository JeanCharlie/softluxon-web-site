"use client";

import ServicesHero from "./hero/Hero";
import ServicesList from "./list/ServiceList";
import ServicesCTA from "./cta/ServiceCTA";
import { services } from "@/consts/services";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList services={services} />
      <ServicesCTA />
    </>
  );
}
