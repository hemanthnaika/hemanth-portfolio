import gsap from "gsap";
import Navbar from "./layout/navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/Skills";


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
};

export default App;
