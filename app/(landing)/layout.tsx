import TopBar from "@/components/ui/topbar/TopBar";
import Footer from "@/components/ui/footer/Footer";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <TopBar />
      {children}
      <Footer />
    </main>
  );
}
