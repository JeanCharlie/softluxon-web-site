import Intro from "@/components/hero/welcome/Intro";
import AboutUs from "@/components/hero/about/About";

import Workflow from "@/components/hero/workflow/Workflow";
import Contact from "@/components/hero/contact/Contact";
import Testimonials from "@/components/hero/testimonials/Testimonials";
import Services from "@/components/hero/services/Services";

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
