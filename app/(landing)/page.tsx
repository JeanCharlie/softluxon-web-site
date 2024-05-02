import Intro from "@/components/hero/welcome/Intro";
import AboutUs from "@/components/hero/about/About";
import Services from "@/components/services/Services";
import Workflow from "@/components/hero/workflow/Workflow";
import Contact from "@/components/hero/contact/Contact";
import Testimonials from "@/components/hero/testimonials/Testimonials";

export default function Page() {
  return (
    <main className="venice-blue">
      <Intro />
      <AboutUs />
      <Services />
      <Workflow />
      <Contact />
      <Testimonials />
    </main>
  );
}
