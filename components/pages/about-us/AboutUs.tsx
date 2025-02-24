"use client";

import { Container } from "@/components/ui/Container";
import { Hero } from "./about-section/hero/Hero";
import { Mission } from "./about-section/mission/Mission";
import { Vision } from "./about-section/vision/Vision";
import { History } from "./about-section/history/History";
import { Team } from "./about-section/team/Team";
import { JoinUs } from "./about-section/join-us/JoinUs";

export default function AboutUs() {
  return (
    <>
      <section
        className="relative pt-32 pb-20"
        style={{
          background: "linear-gradient(to right, #85d8ce, #085078)",
        }}
      >
        <Container>
          <Hero/>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <Mission />
            <Vision />
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <History />
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <Team />
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(to right, #85d8ce, #085078)",
        }}
      >
        <Container>
          <JoinUs />
        </Container>
      </section>
    </>
  );
}
