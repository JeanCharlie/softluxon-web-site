import { Container } from "@/components/ui/Container";
import ServiceCard from "../card/ServiceCard";
import { Service } from "@/interfaces/interfaces";

interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} reverse={index % 2 !== 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
