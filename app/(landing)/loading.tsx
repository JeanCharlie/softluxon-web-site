import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative flex flex-col items-center">
        {/* Ícono giratorio */}
        <div className="w-16 h-16 animate-spin">
          <Image src="/favicon.ico" alt="Loading Icon" width={64} height={64} />
        </div>
        {/* Texto animado */}
        <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  );
}
