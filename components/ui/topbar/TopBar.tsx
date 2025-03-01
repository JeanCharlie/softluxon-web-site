"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkIcon } from "@nextui-org/react";

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-screen z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center w-full justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-2xl font-bold bg-gradient-to-r from-[#085078] to-[#4aa59a] 
                ${scrolled ? 'text-transparent bg-clip-text' : 'text-white'}`}
            >
              SOFTLUXON
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl font-medium transition-colors duration-200
                  ${
                    scrolled
                      ? "text-gray-800 hover:text-[#085078]"
                      : "text-white/90 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
            href="/contact"

              className={`px-6 py-2.5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5
                ${
                  scrolled
                    ? "bg-gradient-to-r from-[#085078] to-[#4aa59a] text-white hover:shadow-lg"
                    : "bg-white text-[#085078] hover:bg-opacity-90"
                }`}
            >
              Contáctenos
            </Link>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors 
                ${
                  scrolled
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <Container>
          <div className="py-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 py-4">
              <Link
              href="/contact"
                className="w-full py-3 px-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-[#085078] to-[#4aa59a] hover:shadow-lg transition-shadow"
                onClick={() => setIsOpen(false)}
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}