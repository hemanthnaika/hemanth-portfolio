import gsap from "gsap";
import Navbar from "./layout/navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";


import "lenis/dist/lenis.css";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import Certificate from "./components/Certificate";
import Loader from "./components/Loader";
import { Button } from "./components/ui/button";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./layout/footer";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const App = () => {
  const lenisRef = useRef<LenisRef | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      {loading && <Loader />}
      {!loading && (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <a href="/projects" className="flex mt-10 items-center justify-center">
            <Button>View more</Button>
          </a>
          <Certificate />
          <Contact />
          <Footer />
        </ReactLenis>
      )}
    </main>
  );
};

export default App;
