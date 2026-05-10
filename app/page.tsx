import AboutBarbara from "./components/AboutBarbara";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Testimonials from "./components/Testimonials";
import VideoSection from "./components/VideoSection";
import WhyUs from "./components/WhyUs";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative outline-none"
      >
        <Hero />
        <WhyUs />
        <Testimonials />
        <Services />
        <VideoSection />
        <Gallery />
        <AboutBarbara />
        <Process />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
