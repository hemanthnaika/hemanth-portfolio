import Navbar from "@/layout/navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import { Button } from "./ui/button";
import Certificate from "./Certificate";

import Footer from "@/layout/footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
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
      <Contact/>
      <Footer />
    </main>
  );
};

export default Home;
