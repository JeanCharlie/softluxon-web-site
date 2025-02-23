import { Container } from "../Container";

export default function Footer() {
  return (
    <footer className="gradient-dark-blue">
      <Container>
        <div className="py-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SoftLuxon. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>{" "}
    </footer>
  );
}
