import gsap from "gsap";
import Navbar from "./layout/navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import Skills from "./components/Skills";
import Hero from "./components/Hero";
import About from "./components/About";

import Experience from "./components/Experience";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />

      <div className="h-screen bottom-"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
};

export default App;
