"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <Container className="pt-12 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/getintouch.svg"
              width={500}
              height={500}
              alt="Contáctenos"
              className="w-full h-auto max-w-lg mx-auto"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 max-w-xl">
            <h2 className="font-montserrat text-6xl text-[#000000] font-bold mb-8 text-center lg:text-left">
              Póngase en contacto
            </h2>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="text-xl font-medium text-black">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="tu@gmail.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="text-xl font-medium text-black">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Deja un mensaje..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-xl w-full bg-[#085078] text-white hover:bg-[#4aa59a] transition-colors duration-300 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <span>Enviando...</span>
                  </div>
                ) : (
                  "Enviar mensaje"
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center mt-4">¡Mensaje enviado con éxito!</p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600 text-center mt-4">Error al enviar el mensaje.</p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
