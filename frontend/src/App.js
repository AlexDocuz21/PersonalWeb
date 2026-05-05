import { useEffect } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";
import CustomCursor from "@/components/CustomCursor";
import GradientMesh from "@/components/GradientMesh";
import SectionDivider from "@/components/SectionDivider";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-3 focus:py-2 focus:rounded-md focus:bg-white/10 focus:backdrop-blur focus:text-white focus:border focus:border-white/20"
        data-testid="skip-to-content-link"
      >
        Skip to content
      </a>

      {/* Ambient gradient mesh (UNDER everything) */}
      <GradientMesh />
      {/* Global film grain overlay (above content, below cursor) */}
      <div className="global-grain" aria-hidden />

      <CursorSpotlight />
      <CustomCursor />
      <Navbar />

      <main id="main" className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />

      <Toaster richColors position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
