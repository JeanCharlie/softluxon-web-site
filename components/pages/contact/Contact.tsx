"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  mensaje: string;
}

const initialForm: ContactForm = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  mensaje: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData(initialForm);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20" style={{
        background: 'linear-gradient(to right, #85d8ce, #085078)'
      }}>
        <Container>
          <div className="text-center text-white space-y-6">
            <h1 className="font-montserrat text-5xl md:text-6xl font-bold drop-shadow-sm">
              Contáctenos
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium">
              Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y encontremos 
              la mejor solución juntos.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#085078] mb-6">
                  Información de Contacto
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Ponte en contacto con nosotros por cualquiera de estos medios o 
                  utiliza el formulario para enviarnos un mensaje.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-none bg-white shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#85d8ce]/20">
                      <Mail className="w-6 h-6 text-[#085078]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#085078]">Email</h3>
                      <p className="text-gray-600">info@softluxon.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none bg-white shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#85d8ce]/20">
                      <Phone className="w-6 h-6 text-[#085078]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#085078]">Teléfono</h3>
                      <p className="text-gray-600">+34 900 123 456</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none bg-white shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#85d8ce]/20">
                      <MapPin className="w-6 h-6 text-[#085078]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#085078]">Ubicación</h3>
                      <p className="text-gray-600">Madrid, España</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <Card className="p-8 border-none bg-white shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Tu número de teléfono"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa
                      </label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje *
                      </label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px]"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-lg font-semibold text-white rounded-lg shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(to right, #085078, #85d8ce)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center mt-4">
                      ¡Mensaje enviado con éxito! Te contactaremos pronto.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center mt-4">
                      Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </p>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}